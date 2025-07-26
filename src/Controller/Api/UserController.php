<?php

namespace App\Controller\Api;

use App\Controller\AbstractController;
use App\DTO\NewUserDto;
use App\Manager\UserManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user')]
class UserController extends AbstractController
{
    #[Route('/me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return new JsonResponse(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        return new JsonResponse(self::serialize($user, ['me']));
    }

    #[Route('/register')]
    public function register(
        #[MapRequestPayload] NewUserDto $newUserDto,
        UserManager                     $userManager
    ): JsonResponse
    {
        if ($userManager->findOneBy(['username' => $newUserDto->username])) {
            return new JsonResponse(['message' => 'User already exists'], 400);
        }

        $user = $userManager->create($newUserDto);

        return new JsonResponse(self::serialize($user, ['me']));
    }
}
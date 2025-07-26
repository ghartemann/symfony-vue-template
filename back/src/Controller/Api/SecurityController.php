<?php

namespace App\Controller\Api;

use App\Controller\AbstractController;
use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(#[CurrentUser] User $user): JsonResponse
    {
        return new JsonResponse(self::serialize($user, ['me']));
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {

    }
}

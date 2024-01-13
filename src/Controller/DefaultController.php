<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/api/test', name:'api_hello')]
    public function test(): JsonResponse
    {
        return new JsonResponse('test 1, 2');
    }
}

<?php

namespace App\Controller\EntryVue;

use App\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntryController extends AbstractController
{
    #[Route('/')]
    #[Route('/{route}', name: 'vue_pages', requirements: ['route' => '.+'])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}

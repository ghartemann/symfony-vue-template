<?php

namespace App\Controller\EntryVue;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntryController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    #[Route('/{route}', name: 'vue_pages')]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}

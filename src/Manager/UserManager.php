<?php

namespace App\Manager;

use App\DTO\NewUserDto;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserManager extends AbstractManager
{
    public function __construct(
        EntityManagerInterface                       $em,
        private readonly UserPasswordHasherInterface $passwordHasher
    )
    {
        parent::__construct($em);
    }

    public function create(NewUserDto $newUserDto): User
    {
        $user = new User();

        $password = $this->passwordHasher->hashPassword($user, $newUserDto->password);

        $user
            ->setCreatedAt(new DateTimeImmutable())
            ->setUsername($newUserDto->username)
            ->setRoles(['ROLE_USER'])
            ->setPassword($password);

        $this->persist($user, true);

        return $user;
    }
}
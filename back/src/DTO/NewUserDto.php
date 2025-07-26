<?php

namespace App\DTO;
use Symfony\Component\Validator\Constraints as Assert;

class NewUserDto
{
    public function __construct(
        #[Assert\NotBlank(message: 'The field "username" is required')]
        #[Assert\Length(min: 2, minMessage: 'The field "username" must contain at least 2 characters')]
        public string $username,

        #[Assert\NotBlank(message: 'The field "password" is required')]
        #[Assert\Length(min: 8, minMessage: 'The field "password" must contain at least 8 characters')]
        public string $password,

        #[Assert\NotBlank(message: 'The field "passwordConfirmation" is required')]
        public string $passwordConfirmation
    )
    {
    }
}

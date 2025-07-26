<?php

namespace App\Controller;

use ArrayObject;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AttributeLoader;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\BackedEnumNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\UidNormalizer;
use Symfony\Component\Serializer\Serializer;

class AbstractController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{
    public static function serialize($toSerialize, array $groups = []): float|int|ArrayObject|bool|array|string|null
    {
        if (!in_array('default', $groups, true)) {
            $groups[] = 'default';
        }

        $classMetadataFactory = new ClassMetadataFactory(new AttributeLoader());
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => fn($object) => $object->getId(),
        ];
        $normalizers = [
            new UidNormalizer(),
            new BackedEnumNormalizer(),
            new DateTimeNormalizer(['datetime_format' => 'Y-m-d H:i:s']),
            new ObjectNormalizer(classMetadataFactory: $classMetadataFactory, defaultContext: $defaultContext)
        ];
        $serializer = new Serializer($normalizers);

        return $serializer->normalize($toSerialize, context: ['groups' => $groups]);
    }
}

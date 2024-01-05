<?php

namespace App\Manager;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;
use RuntimeException;

class AbstractManager
{
    public EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getClassRepository(string $className = null): ObjectRepository
    {
        if (empty($this->em)) {
            throw new RuntimeException('No entity manager provided.');
        }

        if (!$className) {
            $className = $this->getClassDependency();
        }

        return $this->em->getRepository('App\Entity\\' . $className);
    }

    private function getClassDependency(): string
    {
        $className = substr(get_class($this), strrpos(get_class($this), '\\') + 1);
        return str_replace('Manager', '', $className);
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->em;
    }

    public function findAll(): array
    {
        /** @var ServiceEntityRepository $repository */
        $repository = $this->getClassRepository();
        return $repository->findAll();
    }

    public function findBy(array $criteria, ?array $orderBy = null, ?int $limit = null, ?int $offset = null): array
    {
        /** @var ServiceEntityRepository $repository */
        $repository = $this->getClassRepository();

        return $repository->findBy($criteria, $orderBy, $limit, $offset);
    }

    public function find(string $id): ?object
    {
        /** @var ServiceEntityRepository $repository */
        $repository = $this->getClassRepository();
        return $repository->find($id);
    }

    public function findOneBy(array $params, array $orderBy = null): ?object
    {
        /** @var ServiceEntityRepository $repository */
        $repository = $this->getClassRepository();

        return $repository->findOneBy($params, $orderBy);
    }

    final public function persist(object $object, bool $flush = false): void
    {
        $this->em->persist($object);

        if ($flush) {
            $this->flush();
        }
    }

    public function flush(): void
    {
        $this->em->flush();
    }

    public function delete($entity, bool $flush = false): void
    {
        $this->em->remove($entity);

        if ($flush === true) {
            $this->flush();
        }
    }
}

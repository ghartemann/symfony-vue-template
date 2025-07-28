# Symvue : l'incroyable template

[symvue.ghartemann.fr](https://symvue.ghartemann.fr)

Template pour un projet Symfony + Vue.js + Vite + TailwindCSS.

## Tutoriel

### Installer le projet :
```
yarn install
composer install
```

### Configuration :
Modifier les `TODO` dans les fichiers `docker-compose.yml` et `base.html.twig`.

### Pour dev
#### Démarrer le serveur Symfony

```
symfony serve -d
```

#### Lancer le hot-reload

```
vite / yarn dev
```

### Pour deploy
#### Créer un self-hosted runner
[Doc Github](https://docs.github.com/fr/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)

#### Commit et tag une version
```
git tag <version> && git push origin --tags
```

Le déploiement se lance automatiquement au tag.

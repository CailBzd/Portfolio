# Portfolio Next.js

Ce projet de portfolio a été conçu pour mettre en valeur mes compétences en développement web, avec une forte utilisation de **Next.js**, **Supabase**, **Scaleway** et d'autres technologies modernes. Ce site présente mon parcours professionnel, mes expériences et mes projets réalisés, tout en tirant parti de l'optimisation des performances et de l'hébergement dans le cloud.

## Technologies utilisées

### Next.js

Ce projet utilise **Next.js** pour la génération de pages côté serveur (SSR) et la création de routes dynamiques. Cette approche permet d'avoir une expérience utilisateur fluide avec des pages pré-rendues pour de meilleures performances SEO et un rendu rapide.

- **Pages dynamiques** : Utilisation de `getServerSideProps` et `getStaticProps` pour un rendu dynamique.
- **Optimisation des performances** : Chargement des ressources de manière optimisée grâce à la pré-fetching des pages.
- **Style global** : Les styles sont gérés via **CSS Modules** et un fichier global `globals.css`.

### TypeScript

Le projet est écrit en **TypeScript** pour tirer parti de la sécurité du typage statique et améliorer la lisibilité du code. TypeScript permet également une meilleure gestion des erreurs et une expérience de développement plus robuste.

### Supabase

Le backend du site utilise **Supabase**, une alternative open-source à Firebase, pour gérer la base de données, l'authentification des utilisateurs et le stockage des fichiers. Supabase est intégré de manière transparente pour fournir une solution de backend rapide et scalable.

- **Base de données relationnelle** : Utilisation de PostgreSQL pour stocker les données des utilisateurs et des projets.
- **Authentification** : Gestion de l'authentification des utilisateurs avec Supabase Auth.
- **Stockage de fichiers** : Gestion des images et fichiers de manière sécurisée grâce à Supabase Storage.

### Scaleway (Hébergement)

L'application est hébergée sur **Scaleway**, un fournisseur d'infrastructure cloud, pour bénéficier d'un hébergement rapide et fiable. Les ressources cloud sont utilisées pour déployer les applications, gérer les bases de données et s'assurer que le site soit hautement disponible et scalable.

### Vercel (Déploiement)

Le projet est déployé automatiquement sur **Vercel**, ce qui permet un déploiement rapide, efficace et une gestion des environnements simplifiée. Vercel offre une excellente intégration avec **Next.js** et optimise les performances du site grâce à des fonctionnalités comme la prévisualisation des déploiements et l'optimisation des images.

### TypeScript

Le projet utilise également **TypeScript** pour une gestion efficace des types et pour garantir la stabilité du code à long terme.

### Automatisation et scripts

L'automatisation du workflow est une partie essentielle de ce projet, notamment via des scripts pour simplifier les tâches courantes et accélérer le processus de développement. Ces scripts incluent :

- **Script de génération du build** : Automatisation de la génération des builds pour la production.
- **Script de déploiement automatisé sur Vercel** : Déploiement instantané des modifications via un simple push Git.
  
## Fonctionnalités

- **Présentation dynamique des projets** : Affichage interactif et dynamique des projets et expériences.
- **Formulaire de contact** : Intégration d'un formulaire avec validation des données.
- **Animations légères** : Utilisation d'animations modernes pour une expérience utilisateur fluide.
- **Réactivité mobile** : Le site est entièrement responsive, offrant une expérience optimale sur tous les appareils.

## Déploiement et Hébergement

### Supabase

Supabase est utilisé pour gérer le backend, la base de données et le stockage des fichiers.

1. Création d'un projet sur Supabase pour gérer la base de données (PostgreSQL) et le stockage des fichiers.
2. Connexion de Next.js à Supabase via l'API et les SDK fournis.

### Scaleway

Le site est hébergé sur **Scaleway** pour bénéficier d'une solution cloud flexible.

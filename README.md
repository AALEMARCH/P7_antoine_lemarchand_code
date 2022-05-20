# GROUPOMANIA P7 OPENCLASSROOMS

## Installation

Pour démarrer le projet, il vous faudra cloner ce répertoire `github`. Il contient le code de l'API dans le dossier 'backend' et le code Client dans le dossier 'frontend'.

### Backend

#### Installer les dépendances

Placer votre terminal sur le dossier Backend, puis tapez la commande:
`$ npm install`
Cette commande permettra de télécharger les dépendances se trouvant dans le fichier `package.json`. Elle initialisera également un dossier `node_module`.

#### Préparation de la base de données

Les codes de l'API étant situés dans des variables d'environnement, elle-même placer dans un fichier `.env`, il sera nécessaire de recréer et d'implémenter se fichier.
Un exemple est donné ici: `.env.example`.
Les variables d'environnement pour le code de l'API se trouvent dans le dossier `config.js`.

DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DEVELOPMENT sont les éléments d'authentification permettant de se connecter à la base de données.

JWT_DECODEDTOKEN permet à json web token de créer des tokens d'authentification.

PORT est le port sur lequel l'application va s'ouvrir.

#### Préparation au stockage des images

Créer un dossier `images` a la racine du dossier backend.

#### Lancement de l'API

Placer votre terminal sur le dossier Backend, puis tapez la commande:
`$ nodemon serveur`
A ce moment, l'utilisation du logiciel `Postman` pourrait vous permettre d'effectuer vos propres tests sur les routes de l'API.

### Frontend

#### Installation

Le frontend est une application `Reactjs` créée avec l'utilitaire `create-react-app`.
Il est nécessaire d'avoir lancer le backend sur une autre ligne de commande avant de lancer le frontend.

L'installation des dépendances se fait avec la commande:
`npm install`

On lance ensuite l'application avec la commande:
`npm start`
Il faudra ensuite appuyer sur `y` afin de faire tourner le frontend sur le port `3001`. Le port `3000` etant déjà utilisé par le backend.

#### Recommandation

Pour un meilleur contrôle sur la base de donnée, ainsi que pour la création d'un utilisateur Administrateur, Je recommande d'utiliser `Wampserver` et `phpMyAdmin`. La création de cet utilisateur Admin se fera depuis la base de données. Il sera nécessaire d'éditer directement un utilisateur depuis la table users, et de passer le rang isAdmin à 1.

Pour la création d'un utilisateur test Administrateur, placez-vous dans votre terminal sur le dossier backend, lancer la commande `npx sequelize-cli seed:generate --name demo-user`ce qui génèrera un fichier de test dans le dossier `seeders` présent dans le dossier backend. Implémenter ensuite ce fichier sur le modèle da la table users. Lancer ensuite la commande `npx sequelize-cli db:seed:all` qui permettra d'implementer la table users de cet utilisateur test.

#### UTILISATION

Groupomania est une ébauche de réseau social d'entreprise.

Les utilisateurs ont la possibilité de créer un compte non administrateur et de se connecter/déconnecter.
Ils peuvent créer un post, un commentaire, implementer leur profil ou encore liké ou disliké les posts des autres utilisateurs.
Ils peuvent modifier ou supprimer leurs propres posts, commentaires ou profil.
Il peuvent visiter la page profils des autres utilisateurs depuis leurs posts, ou depuis la page Réseau de l'application.

Par mesure de sécurité, seul le gestionnaire de la base de données est en mesure de créer un compte administrateur. Il pourra également transformer un compte non Admin en compte Admin.
Le compte administrateur a la possibilité de supprimer un commentaire, un post ou le profil d'un autre utilisateur.

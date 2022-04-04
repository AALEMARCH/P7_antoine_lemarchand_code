# API GROUPOMANIA

## POUR LANCER LE SERVEUR

`$ nodemon serveur`

# ROUTES `USERS`

## Route POST pour créer un compte

Certaines regles doivent etre respecter concerant le format de `l'adresse Email` et du `mot de passe`
http://localhost:3000/api/users/signup

## Route POST pour se logger

Necessite un mot de passe et une adresse mail préalablement enregistré
http://localhost:3000/api/users/login

## Route GET pour voir tous les profiles d'utilisateurs

Necessite un `token d'authentification`
Exclusion de certain attribut: `email` / `password`
http://localhost:3000/api/users

## Route GET pour voir son profile utilisateur

http://localhost:3000/api/users/profile/:id

## Route PUT pour modifier son profile d'utilisateur

http://localhost:3000/api/users/profile/update/:id

## Route DELETE pour supprimer son profile d'utilisateur

http://localhost:3000/api/users/profile/delete/:id`

# ROUTES `POSTS`

## Route POST pour créé un post

http://localhost:3000/api/posts

## Route GET pour lire tous les post

http://localhost:3000/api/posts

## Route GET pour lire un seul post

http://localhost:3000/api/posts/:id

## Route PUT pour modifier son post

http://localhost:3000/api/posts/update/:id

## Route DELETE pour supprimer son post

http://localhost:3000/api/posts/delete/:id
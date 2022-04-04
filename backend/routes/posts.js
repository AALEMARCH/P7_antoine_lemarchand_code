// Importation de express
const express = require("express");

// Fonction  Router()
const router = express.Router();

// Importation du contrôleur pour les posts
const postsCtrl = require("../controllers/posts");

// Importation du middleware d'authentification
const auth = require("../middleware/auth");

// Importation du middleware multer pour la gestion des images
const multer = require("../middleware/multer-config");

// Création des routes posts
router.post("/", auth, multer, postsCtrl.createPost);
// router.get("/", postsCtrl.readAllPosts);
// router.get("/:id", postsCtrl.readOnePost);
// router.put("/update/:id", postsCtrl.updatePost);
// router.delete("/delete/:id", postsCtrl.deletePost);

// Exportation du module
module.exports = router;

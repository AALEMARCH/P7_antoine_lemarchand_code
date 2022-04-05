// Importation de express
const express = require("express");

// Fonction  Router()
const router = express.Router();

// Importation du contrôleur pour les commentaires
const commentsCtrl = require("../controllers/comments");

// Importation du middleware d'authentification
const auth = require("../middleware/auth");

// Importation du middleware multer pour la gestion des images
const multer = require("../middleware/multer-config");

// Création des routes comments
router.post("/:postId", auth, multer, commentsCtrl.createComment);
router.get("/", auth, commentsCtrl.readAllComment);
router.delete("/:commentId", auth, commentsCtrl.deleteComment);
// router.post('/:commentId/like', auth, likesCtrl.likeComment);

// Exportation du module
module.exports = router;
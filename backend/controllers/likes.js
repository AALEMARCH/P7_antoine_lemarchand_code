const { User, Post, Comment, Like } = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

// exports.likePost = async (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
//   const userId = decodedToken.userId;
//   const postId = req.params.postId;
//   const liked = req.body.like;

//   try {
//     const post = await Post.findOne({ where: { id: postId } });
//     if (!post) {
//       res.status(404).json({ message: "resource not found!" });
//     } else if(liked == false) {
//       const like = await Like.create({
//         postId: postId,
//         userId: userId,
//       });
//       return res.status(201).json(like);
//     }
//   } catch (error) {
//     return res.status(500).json({
//       error: "An error has occurred",
//     });
//   }
// };

// exports.likePost = async (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
//   const userId = decodedToken.userId;
//   const postId = req.params.postId;
//   const liked = req.body.like;
//   const post = await Post.findOne({ where: { id: postId } });

//   if (!post) {
//     res.status(404).json({ message: "resource not found!" });
//   } else {
//     switch (liked) {
//       case 1:
//         // Ajout d'un like
//         Like.create({
//           postId: postId,
//           userId: userId,
//           like: liked,
//         });
//         res.status(200).json({ message: "like +1" });

//         break;

//       case -1:
//         // Ajout d'un dislike
//         Like.destroy({
//             where: {userId, postId}
//         })

//         break;

//       case 0:
//         // Suppression like dislike si le client annule son choix

//         break;
//     }
//   }
// };

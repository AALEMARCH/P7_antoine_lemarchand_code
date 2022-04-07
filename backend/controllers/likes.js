const { User, Post, Comment, Like } = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

exports.likePost = async (req, res, next) => {
  // const token = req.headers.authorization.split(" ")[1];
  // const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  // const userId = decodedToken.userId;
  // const postId = req.params.postId;
  // try {
  //   const user = await Like.findOne({
  //     where: { userId: userId, postId: postId },
  //   });
  //   if (user) {
  //     await Like.destroy(
  //       { where: { UserId: userId, PostId: postId } },
  //       { truncate: true, restartIdentity: true }
  //     );
  //     return res.status(200).send({ messageRetour: "you dislike this post" });
  //   } else {
  //     await Like.create({
  //       UserId: userId,
  //       PostId: postId,
  //       likes: req.body.likes,
  //     });
  //     return res.status(201).json({ messageRetour: "you like this post" });
  //   }
  // } catch (error) {
  //   return res.status(500).send({ error: "Erreur serveur" });
  // }
};

exports.readAllLikes = async (req, res, next) => {
  try {
    const like = await Like.findAll({ where: { id: req.params.postId } });
    return res.status(201).json(like);
  } catch {
    return res.status(500).json({
      error: "An error has occurred",
    });
  }
};
exports.likeComment = async (req, res, next) => {};

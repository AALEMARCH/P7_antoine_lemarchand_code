const { User, Post } = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

exports.createPost = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  const { title, content, attachment } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("Sorry,we can't find your account");
    }
    if (user) {
      const post = await Post.create({
        UserId: user.id,
        idUSERS: userId,
        title,
        content,
        attachment,
      });
      return res.status(201).json(post);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.readAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["title", "content", "attachment", "createdAt"],
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenu lors de la récupération des posts ",
    });
  }
};

exports.readAllPostUser = async (req, res, next) => {
  try {
    const post = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: {
        model: User,
        attributes: ["id", "username", "createdAt"],
      },
      where: { userId: req.params.userId },
    });
    res.status(200).json({ post });
  } catch {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

exports.updatePost = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  try {
    const { title, content, attachment } = req.body;
    const user = await User.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    if (user) {
      const post = await Post.findOne({
        where: { id: req.params.id },
      });
      post.update({
        title,
        content,
        attachment,
      });
      res.status(200).json({ post });
    }
  } catch {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

// exports.deletePost = async (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
//   const userId = decodedToken.userId;
//   try {
//     const post = await Post.findOne({
//       where: { id: req.params.id },
//     });
//     if (userId === post.userId) {
//       post.destroy({ truncate: true });
//       return res.status(200).json({ message: "your post has been deleted" });
//     } else {
//       return res.status(403).json({ message: "unauthorized access!" });
//     }
//   } catch {
//     return res.status(500).json({ err: "An error occured" });
//   }
// };

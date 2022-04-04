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

// exports.readAllPosts = async (req, res, next) => {
//   try {
//     const posts = await Post.findAll();
//     return res.json(posts);
//   } catch {
//     return res.status(500).json({ err: "An error occured" });
//   }
// };

// exports.readOnePost = async (req, res, next) => {
//   try {
//     const post = await Post.finOne({
//       where: { id: req.params.id },
//     });
//     if (!post) {
//       throw new Error("post not found!");
//     }
//     res.status(200).json({ post });
//   } catch {
//     return res.status(403).json({ message: "unauthorized access!" });
//   }
// };

const { User, Post } = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

exports.createPost = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  const { title, content } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("Sorry, we can't find your account");
    } else {
      const post = await Post.create({
        UserId: user.id,
        username: user.username,
        title,
        content,
        attachment: req.file
          ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
          : req.body.attachment,
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
      attributes: [
        "id",
        "userId",
        "username",
        "title",
        "content",
        "attachment",
        "createdAt",
      ],
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({
      error: "An error has occurred",
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
    const { title, content } = req.body;
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      throw new Error("post not found!");
    } else {
      const user = await User.findOne({
        where: { id: userId },
      });
      if (userId === post.UserId || user.isAdmin === true) {
        post.update({
          title,
          content,
          attachment: req.file
            ? `${req.protocole}://${req.get("host")}/images/${
                req.file.filename
              }`
            : req.body.attachment,
        });
        res.status(200).json({ post });
      } else {
        return res.status(403).json({ message: "unauthorized access!" });
      }
    }
  } catch {
    return res.status(500).json({ err: "An error occured" });
  }
};

exports.deletePost = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      throw new Error("post not found!");
    } else {
      const user = await User.findOne({
        where: { id: userId },
      });
      if (userId === post.UserId || user.isAdmin === true) {
        if (post.attachment != null) {
          const filename = post.attachment.split("/images/")[1];

          fs.unlink(`images/${filename}`, () => {
            Post.destroy({
              where: { id: req.params.postId },
            });
            res.status(200).json({ message: "your post has been deleted" });
          });
        } else {
          Post.destroy({
            where: { id: req.params.postId },
          });
          res.status(200).json({ message: "your post has been deleted" });
        }
      } else {
        return res.status(403).json({ message: "unauthorized access!" });
      }
    }
  } catch {
    return res.status(500).json({ err: "An error occured" });
  }
};

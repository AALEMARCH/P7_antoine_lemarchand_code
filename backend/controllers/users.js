const bcrypt = require("bcrypt"); // Package de cryptage
const jwt = require("jsonwebtoken"); // Création et vérification du Token
const fs = require("fs");
const dotenv = require("dotenv"); // Importation de dotenv
const { User } = require("../models");
dotenv.config();

// CTRL de création des utilisateurs
exports.signup = async (req, res) => {
  try {
    const { email, username, password, bio } = req.body;
    const attachmentURL = req.file
      ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      : "";
    const user = await User.findOne({
      where: { email: email },
    });

    if (user !== null) {
      if (user.email === email) {
        // if(user.username === username) {
        return res.status(409).json({ error: "Cet utilisateur existe déja !" });
      }
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        username,
        password: hash,
        bio,
        isAdmin: false,
        attachment: attachmentURL,
      });
      return res.status(201).json({ userId: newUser.id });
    }
  } catch (error) {
    return res.status(500).json({ err: "An error occured" });
  }
};

// CTRL de lecture des utilisateurs
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["email", "password"] },
    });
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

// CTRL de login des utilisateurs
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé!" });
    } else {
      const hash = await bcrypt.compare(req.body.password, user.password);
      if (!hash) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      } else {
        res.status(200).json({
          userId: user.id,
          token: jwt.sign({ userId: user.id }, process.env.JWT_DECODEDTOKEN, {
            expiresIn: "24h",
          }),
        });
      }
    }
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

// CTRL de récupération du profil des utilisateurs
exports.userProfile = async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "email", "username", "bio", "attachment", "isAdmin"],
      where: { id: req.params.id },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    res.status(200).json({ user });
  } catch (err) {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

// CTRL de modification du profil des utilisateurs
exports.modifyProfile = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  const { email, username, bio } = req.body;
  const attachmentURL = req.file
    ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    : req.body.attachment;

  try {
    const user = await User.findOne({
      where: { id: req.params.id },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    if (userId === user.id) {
      if (user.attachment != null) {
        const filename = user.attachment.split("/images/")[1];

        fs.unlink(`images/${filename}`, () => {
          user.update({
            email: email || user.email,
            username: username || user.username,
            bio: bio || user.bio,
            attachment: attachmentURL,
          });
          res.status(200).json({ user });
        });
      } else {
        user.update({
          email: email || user.email,
          username: username || user.username,
          bio: bio || user.bio,
          attachment: user.attachment,
        });
        res.status(200).json({ user });
      }
    } else {
      return res.status(403).json({ message: "unauthorized access!" });
    }
  } catch (err) {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

// CTRL de suppression du profil des utilisateurs
exports.deleteProfile = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_DECODEDTOKEN);
  const userId = decodedToken.userId;
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
    });
    const userAdmin = await User.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    if (userId === user.id || userAdmin.isAdmin === true) {
      if (user.attachment != null) {
        const filename = user.attachment.split("/images/")[1];

        fs.unlink(`images/${filename}`, () => {
          User.destroy({
            where: { id: req.params.id },
          });
          return res
            .status(200)
            .json({ message: "you have correctly deleted this profil!" });
        });
      } else {
        User.destroy({
          where: { id: req.params.id },
        });
        return res
          .status(200)
          .json({ message: "you have correctly deleted this profil!" });
      }
    } else {
      return res.status(403).json({ message: "unauthorized access!" });
    }
  } catch {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

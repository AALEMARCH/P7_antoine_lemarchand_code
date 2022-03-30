const bcrypt = require("bcrypt"); // Package de cryptage
const jwt = require("jsonwebtoken"); // Création et vérification du Token
const dotenv = require("dotenv"); // Importation de dotenv
const models = require("../models");
const { response } = require("express");

dotenv.config();

exports.signup = async (req, res, next) => {
  const { email, username, password, isAdmin } = req.body;
  if (
    email != null ||
    username != null ||
    password != null ||
    isAdmin != null
  ) {
    try {
      const user = await models.User.create({
        email,
        username,
        password: await bcrypt.hash(password, 10),
        isAdmin,
      });
      return res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(400).json({ error: "missing parameters" });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll({
      attributes: { exclude: ["email", "password"] },
    });
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const oldUsers = await models.User.findOne({
      where: { email: req.body.email },
    });

    if (!oldUsers) {
      return res.status(404).json({ message: "Utilisateur non trouvé!" });
    } else {
      const hash = await bcrypt.compare(req.body.password, oldUsers.password);
      if (!hash) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      } else {
        res.status(200).json({
          userId: models.User.id,
          token: jwt.sign(
            { userId: models.User.id },
            process.env.JWT_DECODEDTOKEN,
            {
              expiresIn: "24h",
            }
          ),
        });
      }
    }
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

exports.userProfile = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
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

exports.modifyProfile = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: { id: req.params.id },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    if (user) {
      user.update({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio,
        attachment: req.body.attachment,
      });
    }
    res.status(200).json({ user });
  } catch (err) {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

exports.deleteProfile = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: { id: req.params.id },
    });
    if (!user) {
      throw new Error("account not found!");
    }
    if (user) {
      user.destroy({
        truncate: true,
      });
      return res
        .status(200)
        .json({ message: "votre profile a bien été supprimer!" });
    }
  } catch {
    return res.status(403).json({ message: "unauthorized access!" });
  }
};

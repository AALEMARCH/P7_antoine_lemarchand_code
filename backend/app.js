const express = require("express");
const helmet = require("helmet");

// routes
const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");

// Donne accès au chemin du système de fichiers
const path = require("path");

// Package dotenv (variable d'environnement)
const dotenv = require("dotenv");
dotenv.config();

const app = express(); // create a new express app

app.get("/", (req, res) => {
  res.send("App running");
});

// Gestion des CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

//helmet
app.use(helmet());

// Conversions JSON à la place de body parser
app.use(express.json());

//multer
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
app.use("/api/users/", usersRoutes);
app.use("/api/posts/", postsRoutes);
app.use("/api/comments/", commentsRoutes);

module.exports = app;

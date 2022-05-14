import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

//Structure de la page Login
const Login = () => {
  //Etat de base des données attendu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Fonction d'envoi du formulaire
  const handleLogin = (e) => {
    e.preventDefault();

    //Gestion des erreurs avec Regexp et conditions
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    const emailInput = document.getElementById("formBasicEmail");
    const passwordInput = document.getElementById("formBasicPassword");

    const emailRegex =
      /^[a-z0-9\-_]+[a-z0-9.\-_]*@[a-z0-9\-_]{2,}\.[a-z.\-_]+[a-z\-_]+$/i;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9].*?[0-9]).{8,100}$/g;

    if (!email || !password) {
      alert("veuillez remplir tous les champs du formulaire");
    }

    if (
      emailRegex.test(email) === false ||
      passwordRegex.test(password) === false
    ) {
      if (emailRegex.test(email) === false) {
        console.log(emailRegex.test(email));
        emailError.innerText = "Format d'Email invalide";
        emailInput.style.background = "#dc3545";
        emailInput.style.color = "white";
      } else {
        emailError.innerText = " ";
        emailInput.style.background = "white";
        emailInput.style.color = "black";
      }
      if (passwordRegex.test(password) === false) {
        console.log(passwordRegex.test(password));
        passwordError.innerText = "Le mot de passe n'est pas asez fort !";
        passwordInput.style.background = "#dc3545";
        passwordInput.style.color = "white";
      } else {
        passwordError.innerText = " ";
        passwordInput.style.background = "white";
        passwordInput.style.color = "black";
      }
    } else {
      //Récupération des données de l'API
      axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: `${process.env.REACT_APP_API_URL}api/users/login`,
        withCredentials: true,
        data: {
          email,
          password,
        },
      })
        .then((res, req) => {
          console.log(res);
          if (res.data.token && res.data.userId) {
            console.log(res.data.token);
            console.log(res.data.userId);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            window.location = "/home";
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
          if (err.response.data.message !== undefined) {
            emailError.innerHTML = err.response.data.message;
          } else {
            emailError.innerHTML = null;
          }

          if (err.response.data.error) {
            passwordError.innerHTML = err.response.data.error;
          } else {
            passwordError.innerHTML = null;
          }
        });
    }
  };

  return (
    <Form action="" onSubmit={handleLogin} className="form_log">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Entrez l'e-mail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <Form.Text className="text-muted">
          Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="tapez votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
      </Form.Group>
      <Button variant="outline-danger" type="submit" className="logBtn">
        Se connecter
      </Button>
    </Form>
  );
};

export default Login;

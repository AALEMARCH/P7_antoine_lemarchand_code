import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Login from "./Login";

//Structure de la page Signup
const SignUp = () => {
  //Etat de base des données attendu
  const [formSubmit, setFormSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  //Fonction d'envoi du formulaire
  const handleSignup = async (e) => {
    e.preventDefault();

    //Gestion des erreurs avec Regexp et conditions
    const terms = document.getElementById("terms");
    const usernameError = document.querySelector(".username.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordConfInput = document.getElementById("password-conf");

    const nameRegex = /^[a-z]{2,20}$/i;
    const emailRegex =
      /^[a-z0-9\-_]+[a-z0-9.\-_]*@[a-z0-9\-_]{2,}\.[a-z.\-_]+[a-z\-_]+$/i;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9].*?[0-9]).{8,100}$/g;

    if (!username || !email || !password || !controlPassword) {
      alert("veuillez remplir tous les champs du formulaire");
    }
    if (password !== controlPassword || password === controlPassword) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
        passwordConfInput.style.background = "#dc3545";
        passwordConfInput.style.color = "white";
      } else if (password === controlPassword) {
        passwordConfirmError.innerHTML = " ";
        passwordConfInput.style.background = "white";
        passwordConfInput.style.color = "black";
      }
    }
    if (!terms.checked) {
      termsError.innerHTML = "Veuillez valider les conditions générales";
    }
    if (
      nameRegex.test(username) === false ||
      emailRegex.test(email) === false ||
      passwordRegex.test(password) === false ||
      !terms.checked ||
      password !== controlPassword
    ) {
      if (nameRegex.test(username) === false) {
        console.log(nameRegex.test(username));
        usernameError.innerText = "Nom utilisateur invalide";
        usernameInput.style.background = "#dc3545";
        usernameInput.style.color = "white";
      } else {
        usernameError.innerText = " ";
        usernameInput.style.background = "white";
        usernameInput.style.color = "black";
      }
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
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/users/signup`,
        data: {
          email,
          password,
          username,
        },
      })
        .then((res) => {
          console.log(res.response);
          setFormSubmit(true);
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.data.error !== undefined) {
            emailError.innerHTML = err.response.data.error;
          } else {
            emailError.innerHTML = null;
          }
          if (err.response.data.username !== undefined) {
            usernameError.innerHTML = err.response.data;
          } else {
            usernameError.innerHTML = null;
          }
          if (err.response.data.passwordError !== undefined) {
            passwordError.innerHTML = err.response.data.passwordError;
          } else {
            passwordError.innerHTML = null;
          }
        });
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h4 className="signUp_message">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <Form
          action=""
          onSubmit={handleSignup}
          id="sign-up-form"
          className="form_log"
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="username"
              name="username"
            />
            <div className="username error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'e-mail"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>
            <Form.Text className="text-muted">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              placeholder="tapez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password-conf">
              Confirmer Mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password-conf"
              placeholder="tapez votre mot de passe"
              onChange={(e) => setControlPassword(e.target.value)}
              value={controlPassword}
            />
            <div className="password-confirm error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                {" "}
                conditions générales
              </a>
            </label>
            <div className="terms error"></div>
          </Form.Group>

          <Button
            variant="outline-danger"
            type="submit"
            value="Valider inscription"
            className="logBtn"
            id="submitBtn"
          >
            Valider inscription
          </Button>
        </Form>
      )}
    </>
  );
};

export default SignUp;

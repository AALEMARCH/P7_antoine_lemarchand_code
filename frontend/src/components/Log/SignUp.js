import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Login from "./Login";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
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

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
      }
      if (!terms.checked) {
        termsError.innerHTML = "Veuillez valider les conditions générales";
      }
    } else {
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
          console.log(res);
          if (res.data.errors) {
            usernameError.innerHTML = res.data.errors.username;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
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
          >
            Valider inscription
          </Button>
        </Form>
      )}
    </>
  );
};

export default SignUp;

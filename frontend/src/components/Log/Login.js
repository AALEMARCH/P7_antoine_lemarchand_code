import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

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
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else if (res.data.token && res.data.userId) {
          console.log(res.data.token);
          console.log(res.data.userId);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form action="" onSubmit={handleLogin}>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="J'accepte les conditions générales"
        />
      </Form.Group>
      <Button variant="outline-danger" type="submit">
        Se connecter
      </Button>
    </Form>
  );
};

export default Login;

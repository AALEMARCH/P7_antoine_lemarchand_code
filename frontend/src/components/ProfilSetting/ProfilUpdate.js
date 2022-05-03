import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { UidContext } from "../Context/AppContext";

const ProfilUpdate = () => {
  const userData = useContext(UidContext);
  console.log(userData);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [attachment, setAttachment] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleProfilUpdate = async (e) => {
    e.preventDefault();
    const usernameError = document.querySelector(".username.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/users/profile/update/${userData.userData}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          email,
          username,
          password,
          bio,
          attachment,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            usernameError.innerHTML = res.data.errors.username;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            console.log(res);
            window.location = "/Profile";
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Form
        action=""
        onSubmit={handleProfilUpdate}
        id="sign-up-form"
        className="form_log"
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            placeholder={userData.username}
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
            placeholder={userData.userEmail}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
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
          <Form.Label htmlFor="username">Biographie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Biographie"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            id="bio"
            name="bio"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Photographie</Form.Label>
          <Form.Control
            type="file"
            placeholder="Photographie"
            onChange={(e) => setAttachment(e.target.value)}
            value={attachment}
            id="attachment"
            name="attachment"
          />
        </Form.Group>

        <Button
          variant="outline-danger"
          type="submit"
          value="Valider inscription"
        >
          Valider les modifications
        </Button>
      </Form>
    </div>
  );
};

export default ProfilUpdate;

import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { UidContext } from "../Context/AppContext";

//Update du profil de l'utilisateur connecté
const ProfilUpdate = () => {
  const userData = useContext(UidContext);

  //Initialisation des données attendue
  const [newProfil, setNewProfil] = useState({
    email: "",
    username: "",
    bio: "",
    attachment: "",
    // attachment: `${userData.userAttachment}`,
  });

  const handleProfilUpdate = async (e) => {
    e.preventDefault();

    //Préparation des données du formulaire
    const formData = new FormData();
    formData.append("email", newProfil.email);
    formData.append("username", newProfil.username);
    formData.append("bio", newProfil.bio);
    formData.append("attachment", newProfil.attachment);

    const usernameError = document.querySelector(".username.error");
    const emailError = document.querySelector(".email.error");

    if (newProfil.attachment !== "") {
      await axios
        .put(
          `${process.env.REACT_APP_API_URL}api/users/profile/update/${userData.userData}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.errors) {
            usernameError.innerHTML = res.data.errors.username;
            emailError.innerHTML = res.data.errors.email;
          } else {
            console.log(res);
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert(
        "Veuillez sélectionner une nouvelle image ou fermer l'onglet de modification"
      );
    }
  };

  const handleProfil = (e) => {
    if (e.target.name !== "attachment") {
      setNewProfil({ ...newProfil, [e.target.name]: e.target.value });
    } else {
      setNewProfil({
        ...newProfil,
        attachment: e.target.files[0],
      });
    }
  };

  return (
    <div>
      <Form
        action=""
        onSubmit={handleProfilUpdate}
        method="put"
        id="sign-up-form"
        className="form_log"
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleProfil(e)}
            defaultValue={userData.username}
            id="username"
            name="username"
          />
          <div className="username error"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue={userData.userEmail}
            name="email"
            id="email"
            onChange={(e) => handleProfil(e)}
          />
          <div className="email error"></div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="bio">Biographie</Form.Label>
          <Form.Control
            type="text"
            defaultValue={userData.userBio}
            onChange={(e) => handleProfil(e)}
            id="bio"
            name="bio"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="attachment">Photographie</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleProfil(e)}
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

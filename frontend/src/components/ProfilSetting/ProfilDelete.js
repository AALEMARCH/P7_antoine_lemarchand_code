import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../Context/AppContext";
import Api from "../../Api/users";

//Suppression du profil d'un utilisateur
const ProfilDelete = () => {
  let navigate = useNavigate();
  const userData = useContext(UidContext);

  const handleProfilDelete = async (e) => {
    e.preventDefault();

    //Récupération des données de l'API
    await Api.delete(`users/profile/delete/${userData.userData}`, {})
      .then((res, req) => {
        console.log(res);
        alert("le profil a bien été supprimer");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button
        variant="outline-danger"
        onClick={handleProfilDelete}
        id="ok"
        className="button-update--size"
      >
        Supprimer le profile
      </Button>{" "}
    </div>
  );
};

export default ProfilDelete;

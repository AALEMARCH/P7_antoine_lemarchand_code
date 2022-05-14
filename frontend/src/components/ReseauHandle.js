import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UidContext } from "./Context/AppContext";
import Api from "../Api/users";

//Utilisation du props "reseau" définie sur le composant ReseauCallData. Structure de la page Reseau.
const ReseauHandle = ({ reseau }) => {
  const date = new Date(reseau.createdAt).toLocaleString();
  let navigate = useNavigate();
  const userData = useContext(UidContext);
  console.log(reseau);

  //Récupération des données de l'API.
  const handleReseauProfilsBtn = async (e) => {
    e.preventDefault();
    await Api.get(`users/profile/${reseau.id}`, {}).then((res) => {
      console.log(res);
      const data = res;
      localStorage.setItem("profils", JSON.stringify(data));
      navigate("/profils");
    });
  };

  if (
    reseau === undefined ||
    reseau === null ||
    userData.userData === reseau.id
  ) {
    return null;
  } else {
    return (
      <div className="reseau-card">
        <div className="reseau-card_title">
          <h4>{reseau.username}</h4>
        </div>
        <div className="reseau-card_body">
          <div>
            <Button
              variant="danger"
              className="reseau-card_btn"
              onClick={handleReseauProfilsBtn}
            >
              Profile
            </Button>
          </div>

          <p>Profile créé le {date}</p>
        </div>
      </div>
    );
  }
};

export default ReseauHandle;

import React, { useContext } from "react";
import { UidContext } from "../components/Context/AppContext";
import ProfilDelete from "./ProfilSetting/ProfilDelete";
import ProfilUpdateBtn from "./ProfilSetting/ProfilUpdateBtn";

//Sous structure de la page Profil
const ProfilHandle = () => {
  //Récupération des données de l'utilisateur connecté avec use context
  const userData = useContext(UidContext);
  console.log(userData);

  return (
    <div className="profil">
      <div className="profil_card">
        <div className="profil_image-container">
          {userData.userAttachment ? (
            <img
              src={userData.userAttachment}
              alt="photographie"
              className="profil_card--img"
            />
          ) : null}
        </div>

        <h4 className="profil_title">{userData.username}</h4>
        <div className="profil_body-container">
          <div className="button-container">
            <div className="button-update">
              <ProfilUpdateBtn />
            </div>
          </div>
          <div className="profil-section">
            <h4>Biographie</h4>
            <p>{userData.userBio}</p>
            <div>
              <h4>Contact</h4>
              <p>{userData.userEmail}</p>
            </div>
            <div>
              <h4>Status</h4>
              {userData.userAdmin === true ? (
                <p>Je suis un modérateur de Groupomania</p>
              ) : (
                <p>Je suis un simple utilisateur de Groupomania</p>
              )}
            </div>
            <div className="profil-section_delete">
              <ProfilDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilHandle;

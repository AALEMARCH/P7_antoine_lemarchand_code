import React, { useContext } from "react";
import { UidContext } from "../components/Context/AppContext";
import ProfilDelete from "./ProfilSetting/ProfilDelete";
import ProfilUpdateBtn from "./ProfilSetting/ProfilUpdateBtn";

//Sous structure de la page Profil
const ProfilHandle = () => {
  //Récupération des données de l'utilisateur connecté avec use context
  const userData = useContext(UidContext);

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
              <h4>Statistiques</h4>
              <div className="profil-section_link">
                <div>
                  <h6>Amis</h6> <span>8,797</span>
                </div>
                <div>
                  <h6>Posts</h6> <span>142</span>
                </div>
              </div>
            </div>
            <div>
              <h4>Connaissances</h4>
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

import React, { useContext } from "react";
import { UidContext } from "../components/Context/AppContext";
import { Button } from "react-bootstrap";

const ProfilHandle = () => {
  const userData = useContext(UidContext);

  return (
    <div className="profil">
      <div className="profil_card">
        <div className="profil_image-container">{userData.userAttachment}</div>

        <h4 className="profil_title">{userData.username}</h4>
        <div className="profil_body-container">
          <div className="button-container">
            <Button variant="danger" className="profil_body-container--button">
              Follow
            </Button>
            <Button variant="outline-danger">
              <i className="fa-solid fa-user-pen"></i>
            </Button>{" "}
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
            <div>
              <h4>Photographie</h4>
              <div className="profil_carousels">{userData.userAttachment}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilHandle;

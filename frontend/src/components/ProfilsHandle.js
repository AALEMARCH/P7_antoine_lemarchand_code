import React from "react";
import { Button } from "react-bootstrap";
// import ProfilUpdateBtn from "./ProfilSetting/ProfilUpdateBtn";

const ProfilsHandle = () => {
  let profils = JSON.parse(localStorage.getItem("profils"));

  console.log(profils);
  console.log(profils.data.user.username);
  return (
    <div className="profil">
      <div className="profil_card">
        <div className="profil_image-container">
          {" "}
          {profils.data.user.attachment ? (
            <img
              src={profils.data.user.attachment}
              alt="photographie"
              className="profil_card--img"
            />
          ) : null}
        </div>

        <h4 className="profil_title">{profils.data.user.username}</h4>
        <div className="profil_body-container">
          <div className="button-container">
            <Button variant="danger" className="profil_body-container--button">
              Follow
            </Button>
          </div>
          <div className="profil-section">
            <h4>Biographie</h4>
            <p>{profils.data.user.bio}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilsHandle;

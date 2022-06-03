import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Api from "../../Api/users";

//Suppression du profil d'un utilisateur
const ProfilsAdminDelete = () => {
  let navigate = useNavigate();
  let profils = JSON.parse(localStorage.getItem("profils"));
  console.log(profils.data.user.username);

  const handleProfilAdminDelete = async (e) => {
    e.preventDefault();

    if (
      window.confirm(
        `Vous vous apprêtez à supprimer le profil de ${profils.data.user.username}, êtes-vous sûr de vouloir faire ça?`
      )
    ) {
      //Récupération des données de l'API
      await Api.delete(`users/profile/delete/${profils.data.user.id}`, {})
        .then((res, req) => {
          console.log(res);
          alert(
            `le profil de l'utilisateur ${profils.data.user.username} a bien été supprimer`
          );
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/Home");
    }
  };

  return (
    <div>
      <Button
        variant="outline-danger"
        onClick={handleProfilAdminDelete}
        id="ok"
        className="button-update--size"
      >
        Supprimer le profile
      </Button>{" "}
    </div>
  );
};

export default ProfilsAdminDelete;

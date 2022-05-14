import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { deletePost } from "../../../Api/posts";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../../Context/AppContext";

const PostDelete = (post) => {
  //Préparation a la navigation et récupération du context
  let navigate = useNavigate();
  const userData = useContext(UidContext);

  const handlePostDelete = async (e) => {
    e.preventDefault();

    //Récupération des données de l'API
    await deletePost(post)
      .then((res, req) => {
        console.log(res);
        navigate("/Profil");
        navigate("/Home");
        alert(`le post de ${post.post.username} a bien été supprimer`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {userData.userAdmin || userData.userData === post.post.userId ? (
        <div className="card_footer--linkChange">
          <Button variant="outline-secondary" onClick={handlePostDelete}>
            Supprimer la publication
          </Button>{" "}
        </div>
      ) : null}
    </>
  );
};

export default PostDelete;

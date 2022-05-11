import React from "react";
import { Button } from "react-bootstrap";
import { deletePost } from "../../../Api/posts";
import { useNavigate } from "react-router-dom";

const PostDelete = (post) => {
  let navigate = useNavigate();

  const handlePostDelete = async (e) => {
    e.preventDefault();

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
    <div className="card_footer--linkChange">
      <Button variant="outline-secondary" onClick={handlePostDelete}>
        Supprimer la publication
      </Button>{" "}
    </div>
  );
};

export default PostDelete;

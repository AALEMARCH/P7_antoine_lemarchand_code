import React from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";

const CommentDelete = (comment) => {
  let navigate = useNavigate();

  const handlCommentDelete = async (e) => {
    e.preventDefault();

    await Api.delete(`comments/${comment.comment.id}`, {})
      .then((res, req) => {
        console.log(res);
        navigate("*");
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={handlCommentDelete}>
        Supprimer
      </Button>{" "}
    </div>
  );
};

export default CommentDelete;

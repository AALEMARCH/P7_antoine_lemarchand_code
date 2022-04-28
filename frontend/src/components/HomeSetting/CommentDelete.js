import React from "react";
import { Button } from "react-bootstrap";
import Api from "../../Api/users";

const CommentDelete = (comment) => {
  const handlCommentDelete = async (e) => {
    e.preventDefault();

    await Api.delete(`comments/${comment.comment.id}`, {})
      .then((res, req) => {
        console.log(res);
        window.location = "/home";
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

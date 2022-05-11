import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../../Context/AppContext";

const CommentDelete = (comment) => {
  let navigate = useNavigate();
  const userData = useContext(UidContext);

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
    <>
      {userData.userAdmin || userData.userData === comment.comment.userId ? (
        <div>
          <Button variant="outline-secondary" onClick={handlCommentDelete}>
            Supprimer
          </Button>{" "}
        </div>
      ) : null}
    </>
  );
};

export default CommentDelete;

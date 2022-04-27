import React from "react";
import { Button } from "react-bootstrap";
import Api from "../../Api/users";

const PostDelete = (post) => {
  console.log(post.post.id);

  const handlePostDelete = async (e) => {
    e.preventDefault();

    await Api.delete(`posts/delete/${post.post.id}`, {})
      .then((res, req) => {
        console.log(res);
        alert(`le post de ${post.post.username} a bien été supprimer`);
        window.location = "/home";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card_footer--linkChange">
      <Button variant="outline-secondary" onClick={handlePostDelete}>
        <i className="fa-solid fa-xmark"></i>
      </Button>{" "}
    </div>
  );
};

export default PostDelete;

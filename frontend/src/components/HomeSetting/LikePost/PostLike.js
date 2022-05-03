import React from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";

const PostLike = ({ post }) => {
  const handlePostLike = async (e) => {
    e.preventDefault();

    await Api.post(`posts/${post.id}/like`, {})
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
      <Button variant="outline-secondary" onClick={handlePostLike}>
        <i className="fa-solid fa-thumbs-up"></i>
      </Button>{" "}
    </div>
  );
};

export default PostLike;

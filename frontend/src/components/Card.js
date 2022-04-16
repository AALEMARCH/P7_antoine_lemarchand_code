import React from "react";
import { Button } from "react-bootstrap";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card_header">
        <img src={post.attachment} alt={"photo du profil de" + post.userId} />
        <h2>{post.title}</h2>
      </div>
      <div className="card_infos">
        <p>{post.content}</p>
      </div>

      <div className="card_footer">
        <p>{post.createdAt}</p>
        <div>
          <Button variant="outline-secondary">
            <i className="fa-solid fa-comments test"></i>
          </Button>{" "}
          <Button variant="outline-secondary">
            <i className="fa-solid fa-thumbs-up"></i>
          </Button>{" "}
          <Button variant="outline-secondary">
            <i className="fa-solid fa-thumbs-down"></i>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;

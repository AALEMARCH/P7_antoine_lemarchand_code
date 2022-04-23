import React from "react";
import { Button } from "react-bootstrap";
// import CommentBtn from "./CommentBtn";
import Comments from "./Comments";
import CommentUser from "./CommentUser";

const Card = ({ post }) => {
  const date = new Date(post.createdAt).toLocaleString();
  console.log(post);
  return (
    <div className="card">
      <div className="card_header">
        <img
          src={post.attachment}
          alt={"photo du profil de " + post.username}
        />
        <h2 className="card_header--title">{post.title}</h2>
        <h2>{post.username}</h2>
      </div>
      <div className="card_infos">
        <p className="card_infos--content">{post.content}</p>
        <div className="comments-container">
          <div className="d-grid gap-2">
            {/* <CommentBtn post={post} /> */}
            <Comments post={post} />
            <CommentUser />
          </div>
        </div>
      </div>

      <div className="card_footer">
        <p>{date}</p>
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

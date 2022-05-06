import React from "react";
import { Button } from "react-bootstrap";
import Comments from "../getComments/Comments";
// import CommentUser from "../getComments/CommentUser";
import PostDelete from "../../HomeSetting/delete/PostDelete";
import UpdatePostBtn from "../UpdatePostBtn";
import PostLike from "../LikePost/PostLike";
import CommentCreated from "../CommentBtn/CommentCreated";

const Card = ({ post }) => {
  const date = new Date(post.createdAt).toLocaleString();
  return (
    <div className="card">
      <div className="card_header">
        <h2>{post.username}</h2>
        <div>
          <h2 className="card_header--title">{post.title}</h2>
        </div>
      </div>
      <div className="card_infos">
        <p className="card_infos--content">{post.content}</p>
        <div className="card_infos--imgContainer">
          <img
            src={post.attachment}
            alt="photographie"
            className="card_infos--img"
          />
        </div>
        <div className="comments-container">
          <div className="d-grid gap-2">
            <Comments post={post} />
            {/* <CommentUser /> */}
            <CommentCreated post={post} />
          </div>
        </div>
      </div>

      <div className="card_footer">
        <p>
          Publié le
          <br />
          {date}
        </p>
        <div>
          <div className="card_footer--link">
            <div className="card_footer--linkChange profilBtn">
              <Button variant="outline-secondary">
                <i className="fa-solid fa-user "></i>
              </Button>{" "}
            </div>
            <div className="card_footer--linkChange">
              <div className="card_footer--linkCount">
                <PostLike post={post} />
                <p>{post.likes}</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="postHandle">
        <PostDelete post={post} />
        <UpdatePostBtn post={post} />
      </div>
    </div>
  );
};

export default Card;

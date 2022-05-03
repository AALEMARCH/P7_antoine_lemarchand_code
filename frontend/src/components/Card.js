import React from "react";
import { Button } from "react-bootstrap";
import Comments from "./Comments";
import CommentUser from "./CommentUser";
import PostDelete from "./HomeSetting/PostDelete";
import CommentBtn from "./HomeSetting/CommentBtn";
import UpdatePostBtn from "./HomeSetting/UpdatePostBtn";
import PostLike from "./HomeSetting/LikePost/PostLike";

const Card = ({ post }) => {
  const date = new Date(post.createdAt).toLocaleString();
  return (
    <div className="card">
      <div className="card_header">
        {/* <img
          src={post.attachment}
          alt={"photo du profil de " + post.username}
        /> */}
        <h2>{post.username}</h2>
        <div>
          {/* <h2>{post.username}</h2> */}
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
          {/* <img
            src="./img/ketchup.jpg"
            alt="photographie"
            className="card_infos--img"
          /> */}
        </div>
        <div className="comments-container">
          <div className="d-grid gap-2">
            <Comments post={post} />
            <CommentUser />
            <CommentBtn post={post} />
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

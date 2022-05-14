import React from "react";
import Comments from "../getComments/Comments";
import PostDelete from "../../HomeSetting/delete/PostDelete";
import UpdatePostBtn from "../UpdatePostBtn";
import PostLike from "../LikePost/PostLike";
import CommentCreated from "../CommentBtn/CommentCreated";
import ProfilsBtn from "../ProfilsSetting/ProfilsBtn";

//Utilisation du props "post" définie sur le composant Posts. Structure des posts.
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
          {post.attachment ? (
            <img
              src={post.attachment}
              alt="photographie"
              className="card_infos--img"
            />
          ) : null}
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
              <ProfilsBtn post={post} />
            </div>
            <div className="card_footer--linkChange">
              <div>
                <PostLike post={post} />
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

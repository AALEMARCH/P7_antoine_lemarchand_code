import React from "react";

const Card = ({ post }) => {
  console.log(post);
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
          <i className="fa-solid fa-comments"></i>
          <i className="fa-solid fa-thumbs-up"></i>
          <i className="fa-solid fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;

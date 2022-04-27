import React from "react";
// import { Button } from "react-bootstrap";
import CommentDelete from "./HomeSetting/CommentDelete";

const CommentUser = ({ comment }) => {
  console.log(`${comment}`);

  if (comment === undefined || comment === null) {
    return null;
  } else {
    const date = new Date(comment.createdAt).toLocaleString();
    return (
      <div className="comments">
        <header className="comments_container">
          <h1 className="comments_header">{comment.username}</h1>
          <div className="comments_handle">
            <div className="comments_date">{date}</div>
            {/* <Button variant="outline-secondary">
              <i className="fa-solid fa-xmark"></i>
            </Button>{" "} */}
            <CommentDelete comment={comment} />
          </div>
        </header>
        <div className="comments_body">
          <div>
            <p className="comments_body--content">{comment.content}</p>
            <footer>{comment.attachment}</footer>
          </div>
        </div>
      </div>
    );
  }
};

export default CommentUser;

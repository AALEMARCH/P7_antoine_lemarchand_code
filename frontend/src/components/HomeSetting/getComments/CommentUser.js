import React from "react";
import CommentDelete from "../../HomeSetting/delete/CommentDelete";

const CommentUser = ({ comment }) => {
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
            <CommentDelete comment={comment} />
          </div>
        </header>
        <div className="comments_body">
          <div>
            <p className="comments_body--content">{comment.content}</p>
            <footer className="comments_footer">
              <div className="comments_pictures">
                <img
                  src={comment.attachment}
                  alt="photographie du commentaire"
                  className="comments_pictures--resize"
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
};

export default CommentUser;

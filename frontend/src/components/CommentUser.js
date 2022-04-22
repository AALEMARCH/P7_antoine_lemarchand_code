import React from "react";
import { Card } from "react-bootstrap";

const CommentUser = ({ comment }) => {
  console.log(`${comment}`);
  if (comment != undefined || comment != null) {
    return (
      <Card>
        <Card.Header>
          {/* <h1>test commentaire</h1> */}
          {console.log(comment)}
          <h1>{comment.username}</h1>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* <p>test commentaire</p> */}
            <p>{comment.content}</p>
            {/* <footer className="blockquote-footer">photo</footer> */}
            <footer className="blockquote-footer">{comment.attachment}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  } else {
    return null;
  }
};

export default CommentUser;

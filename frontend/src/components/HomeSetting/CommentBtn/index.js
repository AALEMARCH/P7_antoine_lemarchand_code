import React, { useState } from "react";
import CommentCreated from "./CommentCreated";
import { Button } from "react-bootstrap";

const CommentBtn = (post) => {
  const [commentHandle, setCommentHandle] = useState();

  const commentHandleModals = (e) => {
    if (e.target.id === "onComment") {
      setCommentHandle(true);
    } else if (e.target.id === "offComment") {
      setCommentHandle(false);
    }
  };

  return (
    <div>
      <div className="commentBtn">
        <Button
          variant="outline-secondary"
          onClick={commentHandleModals}
          id="onComment"
        >
          Commenter
        </Button>{" "}
        <Button
          variant="outline-secondary"
          onClick={commentHandleModals}
          id="offComment"
          className="commentBtn_close"
        >
          X
        </Button>{" "}
      </div>
      {commentHandle && <CommentCreated post={post} />}
    </div>
  );
};

export default CommentBtn;

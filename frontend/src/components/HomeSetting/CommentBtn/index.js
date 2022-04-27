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
      <>
        <Button
          variant="outline-secondary"
          onClick={commentHandleModals}
          id="onComment"
        >
          <i className="fa-solid fa-comments test"></i>
        </Button>{" "}
        <Button
          variant="outline-secondary"
          onClick={commentHandleModals}
          id="offComment"
        >
          <i className="fa-solid fa-xmark"></i>
        </Button>{" "}
      </>
      {commentHandle && <CommentCreated post={post} />}
    </div>
  );
};

export default CommentBtn;

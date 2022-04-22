import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CommentUser from "../CommentUser";

const CommentBtn = () => {
  const [commentsModal, setCommentsModal] = useState();

  const handleModals = (e) => {
    if (e.target.id === "off") {
      setCommentsModal(false);
    } else if (e.target.id === "on") {
      setCommentsModal(true);
    }
  };

  return (
    <div>
      <>
        <Button
          variant="secondary"
          onClick={handleModals}
          size="lg"
          id="on"
          className="comments-container_button"
        >
          Commentaires
        </Button>
        <Button
          variant="secondary"
          onClick={handleModals}
          size="lg"
          id="off"
          className="comments-container_button"
        >
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </>
      {commentsModal && <CommentUser />}
    </div>
  );
};

export default CommentBtn;

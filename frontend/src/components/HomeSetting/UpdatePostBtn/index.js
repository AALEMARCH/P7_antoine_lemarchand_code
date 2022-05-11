import React, { useState, useContext } from "react";
import UpdatePost from "./UpdatePost";
import { Button } from "react-bootstrap";
import { UidContext } from "../../Context/AppContext";

const UpdatePostBtn = (post) => {
  const [updatePostBtn, setUpdatePostBtn] = useState();
  const userData = useContext(UidContext);

  const updatePostModals = (e) => {
    if (e.target.id === "onUpdate") {
      setUpdatePostBtn(true);
    } else if (e.target.id === "offUpdate") {
      setUpdatePostBtn(false);
    }
  };

  return (
    <>
      {userData.userData === post.post.userId ? (
        <div>
          <div className="commentBtn">
            <Button
              variant="outline-secondary"
              onClick={updatePostModals}
              id="onUpdate"
            >
              modifier la publication
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={updatePostModals}
              id="offUpdate"
              className="commentBtn_close"
            >
              X
            </Button>{" "}
          </div>
          {updatePostBtn && <UpdatePost post={post} />}
        </div>
      ) : null}
    </>
  );
};

export default UpdatePostBtn;

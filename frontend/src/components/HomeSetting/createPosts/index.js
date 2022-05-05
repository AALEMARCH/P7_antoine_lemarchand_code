import React, { useState } from "react";
import PostCreated from "./PostCreated";
import { Button } from "react-bootstrap";

const HomeSetting = () => {
  const [homeHandle, setHomeHandle] = useState();

  const homeHandleModals = (e) => {
    if (e.target.id === "on") {
      setHomeHandle(true);
    } else if (e.target.id === "off") {
      setHomeHandle(false);
    }
  };

  return (
    <div className="postCreated">
      <div className="postCreated_container">
        <Button
          variant="outline-danger"
          className="homeHandle_btn"
          onClick={homeHandleModals}
          id="on"
        >
          Créer une publication
        </Button>{" "}
        <Button
          variant="outline-secondary"
          onClick={homeHandleModals}
          id="off"
          className="postBtn_close"
        >
          X
        </Button>{" "}
      </div>
      {homeHandle && <PostCreated />}
    </div>
  );
};

export default HomeSetting;

import React, { useState } from "react";
import PostCreated from "./PostCreated";
import { Button } from "react-bootstrap";

const HomeSetting = () => {
  const [homeHandle, setHomeHandle] = useState();

  const homeHandleModals = (e) => {
    if (e.target.id === "on") {
      setHomeHandle(true);
    }
  };

  return (
    <div>
      <>
        <Button
          variant="outline-danger"
          className="homeHandle_btn"
          onClick={homeHandleModals}
          id="on"
        >
          Créer une publication
        </Button>{" "}
      </>
      {homeHandle && <PostCreated />}
    </div>
  );
};

export default HomeSetting;

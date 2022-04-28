import React from "react";
import { Button } from "react-bootstrap";

const ReseauHandle = ({ reseau }) => {
  const date = new Date(reseau.createdAt).toLocaleString();

  if (reseau === undefined || reseau === null) {
    return null;
  } else {
    return (
      <div className="reseau-card">
        <div className="reseau-card_title">
          <h4>{reseau.username}</h4>
        </div>
        <div className="reseau-card_body">
          <div>
            {" "}
            <Button variant="danger" className="reseau-card_btn">
              Follow
            </Button>
          </div>{" "}
          <p>Profile créé le {date}</p>
        </div>
      </div>
    );
  }
};

export default ReseauHandle;

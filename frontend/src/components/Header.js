import React from "react";
import Navigation from "./Navigation";

const headers = () => {
  return (
    <div className="header-container">
      <h1>Groupomania</h1>
      <div className="header-container_link">
        <Navigation />
      </div>
    </div>
  );
};

export default headers;

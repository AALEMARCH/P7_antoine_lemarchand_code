import React from "react";
import Navigation from "./Navigation";

const headers = () => {
  return (
    <div className="header-container">
      <img
        src="./img/icon-left-font-monochrome-white.png"
        alt="logo de l'entreprise groupomania"
        className="header-container_picture"
      />
      <div className="header-container_link">
        <Navigation />
      </div>
    </div>
  );
};

export default headers;

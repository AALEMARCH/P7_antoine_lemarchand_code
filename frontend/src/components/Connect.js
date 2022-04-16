import React from "react";
import Log from "./Log";

const Connect = () => {
  return (
    <div className="connect">
      <div className="connect_log">
        <div className="connect_container-log">
          <Log />
        </div>
        <div className="connect_container-img">
          <img
            src="./img/icon-above-font.png"
            alt="image groupomania log"
            className="log--img"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;

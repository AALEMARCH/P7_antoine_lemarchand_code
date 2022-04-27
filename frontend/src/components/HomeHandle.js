import React from "react";
import HomeSetting from "./HomeSetting";

const HomeHandle = (props) => {
  const date = new Date(props.date).toLocaleDateString();
  return (
    <div className="homeHandle">
      <p>
        Aujourd'hui nous sommes le : <br /> {date}
      </p>
      <div className="homeHandle_btn">
        <HomeSetting />
      </div>
    </div>
  );
};

export default HomeHandle;

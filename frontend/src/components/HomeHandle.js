import React from "react";
import HomeSetting from "./HomeSetting/createPosts";

//Sous structure de la page Home
const HomeHandle = (props) => {
  //Conversion de la date dans un format utilisable
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

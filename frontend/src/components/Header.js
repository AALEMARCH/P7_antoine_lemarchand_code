// import React from "react";
// import Navigation from "./Navigation";

// const headers = () => {
//   return (
//     <div className="header-container">
//       <img
//         src="./img/icon-left-font-monochrome-white.png"
//         alt="logo de l'entreprise groupomania"
//         className="header-container_picture"
//       />
//       <div className="header-container_link">
//         <Navigation />
//       </div>
//     </div>
//   );
// };

// export default headers;

// import React, { useContext, useEffect, useState } from "react";
// import { UidContext } from "../components/Context/AppContext";
// import Api from "../Api/users";
// import Navigation from "./Navigation";

import React, { useContext } from "react";
import { UidContext } from "../components/Context/AppContext";
import Navigation from "./Navigation";

const Header = () => {
  const userData = useContext(UidContext);

  return (
    <div className="header-container">
      <div className="header-container_items">
        <img
          src="./img/icon-left-font-monochrome-white.png"
          alt="logo de l'entreprise groupomania"
          className="header-container_picture"
        />
        <h2 className="header-container_title">{userData.username}</h2>
      </div>

      <div className="header-container_link">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;

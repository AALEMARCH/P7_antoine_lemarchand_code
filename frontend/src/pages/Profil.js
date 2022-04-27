// import React, { useContext } from "react";
// import Header from "../components/Header";
// import { UidContext } from "../components/Context/AppContext";

// const Profil = () => {
//   const userData = useContext(UidContext);
//   console.log(userData);
//   console.log(userData.username);
//   console.log(userData.userData);
//   console.log(userData.userEmail);
//   console.log(userData.userBio);
//   console.log(userData.userAdmin);
//   console.log(userData.userAttachment);

//   return (
//     <div>
//       <Header />
//       <h1>Bienvenue {userData.username}</h1>
//       <div>Photo: {userData.userAttachment}</div>
//       <div>Email: {userData.userEmail}</div>
//       <div>Bio: {userData.userBio}</div>
//       <div>Id: {userData.userData}</div>
//     </div>
//   );
// };

// export default Profil;

import React from "react";
import Header from "../components/Header";
import ProfilHandle from "../components/ProfilHandle";

const Profil = () => {
  return (
    <div>
      <Header />
      <ProfilHandle />
    </div>
  );
};

export default Profil;

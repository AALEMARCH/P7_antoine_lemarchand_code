import React from "react";
import Header from "../components/nav/Header";
import ProfilHandle from "../components/ProfilHandle";
import ScrollBtn from "../components/ScrollBtn";

//Page de profil de l'utilisateur connecté
const Profil = () => {
  return (
    <div className="profil-body">
      <Header />
      <ProfilHandle />
      <ScrollBtn />
    </div>
  );
};

export default Profil;

// import React from "react";
// // import Header from "../components/nav/Header";
// import ProfilHandle from "../components/ProfilHandle";
// import ScrollBtn from "../components/ScrollBtn";
// import { motion } from "framer-motion";

// //Page de profil de l'utilisateur connecté
// const Profil = () => {
//   return (
//     <motion.div className="profil-body" exit={{ opacity: 0 }}>
//       {/* <Header /> */}
//       <ProfilHandle />
//       <ScrollBtn />
//     </motion.div>
//   );
// };

// export default Profil;

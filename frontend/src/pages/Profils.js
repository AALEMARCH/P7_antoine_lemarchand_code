import React from "react";
import Header from "../components/nav/Header";
import ProfilsHandle from "../components/ProfilsHandle";
import ScrollBtn from "../components/ScrollBtn";

//Page de profil des autres utilisateurs
const Profils = () => {
  return (
    <div>
      <Header />
      <ProfilsHandle />
      <ScrollBtn />
    </div>
  );
};

export default Profils;

// import React from "react";
// // import Header from "../components/nav/Header";
// import ProfilsHandle from "../components/ProfilsHandle";
// import ScrollBtn from "../components/ScrollBtn";
// import { motion } from "framer-motion";

// //Page de profil des autres utilisateurs
// const Profils = () => {
//   return (
//     <motion.div exit={{ opacity: 0 }}>
//       {/* <Header /> */}
//       <ProfilsHandle />
//       <ScrollBtn />
//     </motion.div>
//   );
// };

// export default Profils;

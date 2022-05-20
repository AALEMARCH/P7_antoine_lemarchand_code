import React from "react";
import Connect from "../components/Connect";

//Page d'enregistrement des utilisateurs
const SignOut = () => {
  const logOut = localStorage.clear();
  return (
    <div>
      <>{logOut}</>
      <Connect />
    </div>
  );
};

export default SignOut;

// import React from "react";
// import Connect from "../components/Connect";
// import { motion } from "framer-motion";

// //Page d'enregistrement des utilisateurs
// const SignOut = () => {
//   const logOut = localStorage.clear();
//   return (
//     <motion.div exit={{ opacity: 0 }}>
//       <>{logOut}</>
//       <Connect />
//     </motion.div>
//   );
// };

// export default SignOut;

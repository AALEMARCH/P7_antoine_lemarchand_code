import React from "react";
import Header from "../components/nav/Header";
import LogOut from "../components/Log/LogOut";

//Page de déconnexion
const SignOut = () => {
  return (
    <div>
      <Header />
      <LogOut />
    </div>
  );
};

export default SignOut;

// import React from "react";
// // import Header from "../components/nav/Header";
// import LogOut from "../components/Log/LogOut";
// import { motion } from "framer-motion";

// //Page de déconnexion
// const SignOut = () => {
//   return (
//     <motion.div exit={{ opacity: 0 }}>
//       {/* <Header /> */}
//       <LogOut />
//     </motion.div>
//   );
// };

// export default SignOut;

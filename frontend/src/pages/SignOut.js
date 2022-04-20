// import React from "react";
// import Header from "../components/Header";
// import Connect from "../components/Connect";

// const SignOut = () => {
//   return (
//     <div className="container-signOut">
//       <Header />
//       <Connect />
//     </div>
//   );
// };

// export default SignOut;

import React from "react";
import Header from "../components/Header";
import LogOut from "../components/Log/LogOut";

const SignOut = () => {
  return (
    <div>
      <Header />
      <LogOut />
    </div>
  );
};

export default SignOut;

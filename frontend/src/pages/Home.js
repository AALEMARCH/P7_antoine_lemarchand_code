// import React from "react";
// import Posts from "../components/Posts";
// import Header from "../components/Header";
// import HomeHandle from "../components/HomeHandle";

// const Home = () => {
//   const dates = Date();

//   return (
//     <div>
//       <Header />
//       <HomeHandle date={dates} />
//       <Posts />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Posts from "../components/Posts";
import Header from "../components/Header";
import HomeHandle from "../components/HomeHandle";

const Home = () => {
  const dates = Date();

  return (
    <div>
      <Header />
      <HomeHandle date={dates} />
      <Posts />
    </div>
  );
};

export default Home;

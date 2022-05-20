import React from "react";
import Posts from "../components/HomeSetting/getPosts/Posts";
import Header from "../components/nav/Header";
import ScrollBtn from "../components/ScrollBtn";

//Page d'accueil qui contient les posts
const Home = () => {
  const dates = Date();

  return (
    <div>
      <Header />
      <Posts date={dates} />
      <ScrollBtn />
    </div>
  );
};

export default Home;

// import React from "react";
// import Posts from "../components/HomeSetting/getPosts/Posts";
// // import Header from "../components/nav/Header";
// import HomeHandle from "../components/HomeHandle";
// import ScrollBtn from "../components/ScrollBtn";
// import { motion } from "framer-motion";

// //Page d'accueil qui contient les posts
// const Home = () => {
//   const dates = Date();

//   return (
//     // <motion.div exit={{ opacity: 0 }}>
//     <div>
//       <HomeHandle date={dates} />
//       <Posts />
//       <ScrollBtn />
//     </div>
//     // </motion.div>
//   );
// };

// export default Home;

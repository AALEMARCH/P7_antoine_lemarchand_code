import React from "react";
import Posts from "../components/HomeSetting/getPosts/Posts";
import Header from "../components/nav/Header";
import HomeHandle from "../components/HomeHandle";
import ScrollBtn from "../components/ScrollBtn";

//Page d'accueil qui contient les posts
const Home = () => {
  const dates = Date();

  return (
    <div>
      <Header />
      <HomeHandle date={dates} />
      <Posts />
      <ScrollBtn />
    </div>
  );
};

export default Home;

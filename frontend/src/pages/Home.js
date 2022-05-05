import React from "react";
import Posts from "../components/HomeSetting/getPosts/Posts";
import Header from "../components/nav/Header";
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

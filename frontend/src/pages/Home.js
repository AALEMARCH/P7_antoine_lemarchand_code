import React from "react";
import Posts from "../components/Posts";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <div>
      <Header />
      <p>
        Aujourd'hui nous sommes le : <br /> {props.date}
      </p>
      <Posts />
    </div>
  );
};

export default Home;

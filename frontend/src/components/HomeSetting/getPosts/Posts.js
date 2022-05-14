import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getPosts } from "../../../Api/posts";

//Récupération et mappage des données de l'API, lecture des posts
const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setData(res.data));
  }, []);
  return (
    <div className="post-container">
      {data.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;

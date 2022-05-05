import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getPosts } from "../../../Api/posts";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data));
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

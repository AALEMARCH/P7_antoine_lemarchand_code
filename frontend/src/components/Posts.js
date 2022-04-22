import React, { useEffect, useState } from "react";
import Card from "./Card";
import Api from "../Api/users";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.get("posts/", {}).then((res) => setData(res.data));
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

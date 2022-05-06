import React, { useEffect, useState } from "react";
import CommentUser from "./CommentUser";
import Api from "../../../Api/users";

const Comments = (post) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.get(`comments/${post.post.id}`, {}).then((res) => setData(res.data));
  }, [post]);
  return (
    <div>
      {data.map((comment, index) => (
        <CommentUser key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;

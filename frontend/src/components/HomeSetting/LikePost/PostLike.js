import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { UidContext } from "../../Context/AppContext";

const PostLike = ({ post }) => {
  const userData = useContext(UidContext);
  const [likes, setLikes] = useState([post.likes]);

  const handlePostLike = async (e) => {
    e.preventDefault();

    await Api.post(`posts/${post.id}/like`, {})
      .then((res, req) => {
        Api.get(`posts/onPost/${post.id}`, {}).then((res, req) => {
          setLikes(res.data.post.likes);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {userData.userData !== post.userId ? (
        <div>
          <Button variant="outline-secondary" onClick={handlePostLike}>
            <i className="fa-solid fa-thumbs-up"></i>
          </Button>{" "}
          <p>{likes}</p>
        </div>
      ) : (
        <div>
          <Button variant="outline-secondary" onClick={handlePostLike} disabled>
            <i className="fa-solid fa-thumbs-up"></i>
          </Button>{" "}
          <p>{likes}</p>
        </div>
      )}
    </>
  );
};

export default PostLike;

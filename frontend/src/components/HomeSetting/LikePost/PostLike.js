import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../../Context/AppContext";

const PostLike = ({ post }) => {
  let navigate = useNavigate();
  const userData = useContext(UidContext);

  const handlePostLike = async (e) => {
    e.preventDefault();

    await Api.post(`posts/${post.id}/like`, {})
      .then((res, req) => {
        console.log(res);
        navigate("/Profil");
        navigate("/home");
        console.log(post.likes);
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
        </div>
      ) : (
        <div>
          <Button variant="outline-secondary" onClick={handlePostLike} disabled>
            <i className="fa-solid fa-thumbs-up"></i>
          </Button>{" "}
        </div>
      )}
    </>
  );
};

export default PostLike;

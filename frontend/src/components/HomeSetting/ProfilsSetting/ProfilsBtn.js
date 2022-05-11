import React from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";

const ProfilsBtn = (post) => {
  let navigate = useNavigate();
  console.log(post);

  const handleProfilsData = async (e) => {
    e.preventDefault();

    await Api.get(`posts/profile/${post.post.id}`, {}).then((res, req) => {
      console.log(res);
      const data = res;
      localStorage.setItem("profils", JSON.stringify(data));
      console.log(data.data.user);
      navigate("/profils");
    });
  };

  return (
    <div>
      <>
        <Button variant="outline-secondary" onClick={handleProfilsData}>
          <i className="fa-solid fa-user "></i>
        </Button>{" "}
      </>
    </div>
  );
};

export default ProfilsBtn;

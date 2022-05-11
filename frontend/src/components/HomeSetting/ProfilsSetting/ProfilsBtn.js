import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../../Context/AppContext";

const ProfilsBtn = (post) => {
  let navigate = useNavigate();
  const userData = useContext(UidContext);

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
      {userData.userData !== post.post.userId ? (
        <>
          <Button variant="outline-secondary" onClick={handleProfilsData}>
            <i className="fa-solid fa-user "></i>
          </Button>{" "}
        </>
      ) : null}
    </div>
  );
};

export default ProfilsBtn;

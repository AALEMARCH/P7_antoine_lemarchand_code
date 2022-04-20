import React, { useContext } from "react";
import Header from "../components/Header";
import { UidContext } from "../components/Context/AppContext";
import Register from "./Register";

const Profil = () => {
  const userToken = useContext(UidContext);
  console.log(userToken);

  return (
    <div>
      {userToken ? (
        <div>
          <Header />
          <h2>Profil</h2>
        </div>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Profil;

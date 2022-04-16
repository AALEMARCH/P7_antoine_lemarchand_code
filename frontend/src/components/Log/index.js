import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Log = () => {
  const [signUpModal, setSignUpModal] = useState();
  const [loginModal, setLoginModal] = useState();

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setLoginModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setLoginModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModals} id="register">
            SignUp
          </li>
          <li onClick={handleModals} id="login">
            Login
          </li>
        </ul>
        {signUpModal && <SignUp />}
        {loginModal && <Login />}
      </div>
    </div>
  );
};

export default Log;

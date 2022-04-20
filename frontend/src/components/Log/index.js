import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Button } from "react-bootstrap";

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
        <>
          <Button
            variant="outline-danger"
            onClick={handleModals}
            id="register"
            className="test"
          >
            S'inscrire
          </Button>

          <Button
            variant="outline-danger"
            onClick={handleModals}
            id="login"
            className="test"
          >
            Se connecter
          </Button>
        </>
        {signUpModal && <SignUp />}
        {loginModal && <Login />}
      </div>
    </div>
  );
};

export default Log;

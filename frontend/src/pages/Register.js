import React from "react";
import Connect from "../components/Connect";

const SignOut = () => {
  const logOut = localStorage.clear();
  return (
    <div>
      <>{logOut}</>
      <Connect />
    </div>
  );
};

export default SignOut;

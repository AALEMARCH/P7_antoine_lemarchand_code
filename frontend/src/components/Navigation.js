import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation_link">
        <NavLink to="/">
          <i className="fa-solid fa-house navigation_link--test"></i>
        </NavLink>

        <NavLink to="/profil">
          <i className="fa-solid fa-user navigation_link--test"></i>
        </NavLink>

        <NavLink to="/reseau">
          <i className="fa-solid fa-user-group navigation_link--test"></i>
        </NavLink>

        <NavLink to="/signOut">
          <i className="fa-solid fa-arrow-right-from-bracket navigation_link--test"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;

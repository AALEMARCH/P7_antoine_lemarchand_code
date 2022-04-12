import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation_link">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-passive")}
        >
          <i className="fa-solid fa-house "></i>
        </NavLink>

        <NavLink
          to="/profil"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-passive")}
        >
          <i className="fa-solid fa-user "></i>
        </NavLink>

        <NavLink
          to="/reseau"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-passive")}
        >
          <i className="fa-solid fa-user-group "></i>
        </NavLink>

        <NavLink
          to="/signOut"
          className={(nav) => (nav.isActive ? "nav-active" : "nav-passive")}
        >
          <i className="fa-solid fa-arrow-right-from-bracket "></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;

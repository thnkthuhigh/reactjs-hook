import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact="true">
        Home
      </NavLink>
      <NavLink to="/Todo">Todo</NavLink>
      <NavLink to="/Country">Country</NavLink>
      <NavLink to="/Clock">Clock</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/Love">Love u</NavLink>
    </div>
  );
};

export default Nav;

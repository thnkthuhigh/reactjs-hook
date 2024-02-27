import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/Todo" exact>
        Todo
      </NavLink>
      <NavLink activeClassName="active" to="/Country">
        Country
      </NavLink>
      <NavLink activeClassName="active" to="/Clock">
        Clock
      </NavLink>
    </div>
  );
};

export default Nav;

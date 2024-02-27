import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/Todo">Todo</Link>
      <Link to="/Country">Country</Link>
      <Link to="/Clock">Clock</Link>
    </div>
  );
};

export default Nav;

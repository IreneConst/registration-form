import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <span className="pages">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-selected"
          exact
          to="/"
        >
          1. Authorisation
        </NavLink>
      </span>
      <span className="pages">
        <NavLink
          className={props.valid ? "nav-open" : "nav-link"}
          activeClassName="nav-link-selected"
          to="/personal"
        >
          2. Personal data
        </NavLink>
      </span>
      <span className="pages">
        <NavLink
          className={props.validity ? "nav-open" : "nav-link"}
          activeClassName="nav-link-selected"
          to="/uploading"
        >
          3. Upload data
        </NavLink>
      </span>
    </div>
  );
}

export default Header;

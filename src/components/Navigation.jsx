import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <h1>News Feed App</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to='/posts'>Posts</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

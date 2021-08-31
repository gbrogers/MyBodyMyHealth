import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Authenticate from "./Authenticate";

function Nav() {
  const navStyle = {
    color: "black",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Logo</li>
        </Link>
        <div>
          <Link style={navStyle} to="/menstrualtracking">
            <li>Menstrual Tracking</li>
          </Link>
          <Link style={navStyle} to="/contraceptivetracking">
            <li>Contraceptive Tracking</li>
          </Link>
          <Link style={navStyle} to="/resources">
            <li>Resources</li>
          </Link>
          <Authenticate />
        </div>
      </ul>
    </nav>
  );
}

export default Nav;

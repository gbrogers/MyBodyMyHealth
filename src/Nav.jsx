import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Authenticate from "./Authenticate";

function Nav() {
  const navStyle = {
    color: "black",
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <Link style={navStyle} to="/">
          <li>Logo</li>
        </Link>

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
      </ul>
    </nav>
  );
}

export default Nav;

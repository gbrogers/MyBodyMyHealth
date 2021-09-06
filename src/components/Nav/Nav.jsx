import React from "react";
import styles from "./_Nav.module.scss";
import { Link } from "react-router-dom";
import Authenticate from "../Authenticate/Authenticate";
import Logo from "../../images/Logo.svg";

function Nav() {
  const navStyle = {
    color: "black",
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <Link style={styles.navStyle} to="/">
          {/* <li>&#9776;</li> */}
          <li>
            <img className={styles.logo} src={Logo}></img>
          </li>
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

import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Authenticate from "../Authenticate/Authenticate";
import Logo from "../../images/Logo.svg";
import Hamburger from "../Hamburger/Hamburger";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navStyle = {
    color: "black",
  };
  return (
    <nav className="navigation">
      {/* <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> */}
      <div className={styles.navBar}>
        <Link
          style={styles.navStyle}
          to="/"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li className={styles.logoName}>
            <img className={styles.logo} src={Logo}></img>
            <h1>My Body My Health</h1>
          </li>
        </Link>
        <button onClick={() => setNavbarOpen(!navbarOpen)}>
          <Hamburger />
        </button>
      </div>
      <ul className="navList">
        <Link
          style={styles.navStyle}
          to="/"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Home</li>
        </Link>
        <Link
          style={navStyle}
          to="/menstrualtracking"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Menstrual Tracking</li>
        </Link>
        <Link
          style={navStyle}
          to="/contraceptivetracking"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Contraceptive Tracking</li>
        </Link>
        <Link
          style={navStyle}
          to="/resources"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Resources</li>
        </Link>
        {/* <Authenticate /> */}
      </ul>
      <style jsx>{`
        .navList button {
          all: unset;
        }
        .navigation {
          position: fixed;
          min-height: 10vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #f5bdc4;
          z-index: 100;
        }
        .navigation button {
          all: unset;
        }
        .navigation a,
        .navigation button {
          cursor: pointer;
        }
        .navList {
          display: ${navbarOpen ? "inline" : "none"};
          align-items: center;
          // margin: 30px;
          background-color: #f79da7;
          height: 100vh;
        }
        .navList li,
        .navList button {
          list-style-type: none;
          padding: 10px;
          // height: 30px;
          font-size: 1.3em;
        }

        @media screen and (min-width: 768px){
          .navList {
            padding: 0 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: auto;
        }
        .navList li {
          list-style-type: none;
          padding: 10px;
          font-size: 1em;
        }
      `}</style>
    </nav>
  );
}

export default Nav;

{
  /* <nav className={styles.nav}>
<ul className={styles.navLinks}>
  <Link style={styles.navStyle} to="/">
    {/* <li>&#9776;</li> */
}
//   <li>
//     <img className={styles.logo} src={Logo}></img>
//   </li>
// </Link>

{
  /* <Link style={navStyle} to="/menstrualtracking">
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
</nav> */
}

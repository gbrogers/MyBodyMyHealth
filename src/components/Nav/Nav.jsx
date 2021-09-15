import React, { useState, useContext } from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Hamburger from "../Hamburger/Hamburger";
import { AuthContext } from "../../AuthContext";
import { UserContext } from "../../UserContext";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);

  const navStyle = {
    color: "black",
  };
  return (
    <nav className="navigation">
      <div className={styles.navBar}>
        <Link to="/">
          <div className={styles.logoName}>
            <img className={styles.logo} src={Logo}></img>
            <h1>My Body My Health</h1>
          </div>
        </Link>
        <div className={styles.loginSignUpNav}>
          {!isAuth ? (
            <div>
              <Link
                to="/login"
                className={`${styles.loginSignUpBtn} ${styles.login}`}
              >
                <button>Login</button>
              </Link>

              <Link
                to="/signup"
                className={`${styles.loginSignUpBtn} ${styles.signUp}`}
              >
                <button>Sign Up</button>
              </Link>
            </div>
          ) : (
            <Link
              to="/logout"
              className={`${styles.loginSignUpBtn} ${styles.logoutBtn}`}
              onClick={() => {
                setUser(null);
                setIsAuth(false);
              }}
            >
              Log Out
            </Link>
          )}
        </div>
        <Hamburger navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </div>
      <ul className="navList">
        <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li>Home</li>
        </Link>
        <Link
          to="/menstrualtracking"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Menstrual Tracking</li>
        </Link>
        <Link
          to="/contraceptivetracking"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <li>Contraceptive Tracking</li>
        </Link>
        <Link to="/resources" onClick={() => setNavbarOpen(!navbarOpen)}>
          <li>Resources</li>
        </Link>
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

        .navigation a,
        .navigation button {
          cursor: pointer;
        }
        .navList {
          display: ${navbarOpen ? "inline" : "none"};
          // margin-top: 10px;
          align-items: center;
          background-color: #f79da7;
          height: 100vh;
        }
        .navList li {
          list-style-type: none;
          border-bottom: 1px solid black;
          padding: 10px;
          margin: 5px;
          font-size: 1.3em;
          line-height: 2.5em;
        }

        .navList li:hover {
          margin-bottom: 0;
          font-weight: 700;
        }

        @media screen and (min-width: 768px) {
          .navList {
            padding: 0 30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: auto;
          }
          .navList li {
            list-style-type: none;
            border: none;
            padding: 10px;
            font-size: 1em;
            line-height: 0.5em;
          }
          .navList li:hover {
            border-bottom: 3px #f5bdc4 solid;
            margin-bottom: 2px;
            font-weight: 400;
          }
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

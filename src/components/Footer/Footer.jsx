import styles from "./Footer.module.scss";
import Profile from "../../images/profileIcon.png";
import GitHub from "../../images/Github.png";
import LinkedIn from "../../images/linkedInIcon.png";
import Logo from "../../images/Logo.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/menstrualtracking">Menstrual Tracking</Link>
        <Link to="/contraceptivetracking">Contraceptive Tracking</Link>
      </div>
      <div className={styles.aboutApp}>
        <div className={styles.footerLogoHeaderContainer}>
          <img src={Logo} alt="heart app logo"></img>
          <h4 className={styles.footerHeader}>My Body My Health</h4>
        </div>
        <p>
          <em>My Body My Health</em> was developed as a capstone project by{" "}
          <b>Giselle Rogers</b>, Software Engineer. Project developed using
          PostgreSQL, Express, Node, React, Javascript, HTML, Sass, Sequelize,
          Axios, and Bcrypt. Personalized resources generated from Health.gov.
        </p>

        <div className={styles.mediaLinks}>
          <a href="https://gbrogers.github.io/" target="_blank">
            <img
              src={Profile}
              alt="profile"
              className={styles.socialIcons}
            ></img>
          </a>
          <a href="https://github.com/gbrogers" target="_blank">
            <img
              src={GitHub}
              alt="GitHub"
              className={`${styles.socialIcons} ${styles.github}`}
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/giselle-rogers123"
            target="_blank"
          >
            <img
              src={LinkedIn}
              alt="linkedIn"
              className={styles.socialIcons}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

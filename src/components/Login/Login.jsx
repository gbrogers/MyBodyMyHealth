import styles from "./Login.module.scss";

import { useState, useRef, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [incorrectString, setIncorrectString] = useState("");

  const email = useRef();
  const password = useRef();

  async function handleLogin(e) {
    e.preventDefault();

    const credentials = {
      email: email.current.value,
      password: password.current.value,
    };
    await axios
      .post("/api/authenticate/login", credentials)
      .then((res) => {
        // console.log(res.data);
        if (
          res.data !== "Password Incorrect" &&
          res.data !== "Email Not Recognized"
        ) {
          setUser(res.data);
          setIsAuth(true);
        } else if (res.data === "Password Incorrect") {
          setIncorrectString("Password Incorrect");
        } else {
          setIncorrectString("Email Not Recognized");
        }

        //need to redirect to home following success
      })
      // .catch((error) => console.log(error.response.request._response));
      .catch((error) => console.log("failed -" + error));
  }

  return (
    <div className={`${styles.login} page-layout`}>
      <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

        {!user ? (
          <div className={styles.contentContainer}>
            <h2>Welcome Back!</h2>
            <p className={styles.incorrectString}>{incorrectString}</p>

            <label className={styles.email}>
              <p>Email </p>
              <input type="email" placeholder="enter email" ref={email}></input>
            </label>
            <label className={styles.password}>
              <p>Password </p>
              <input
                type="password"
                placeholder="enter password"
                ref={password}
              ></input>
            </label>
            <button className={styles.loginBtn} type="submit">
              Login
            </button>
            <p className={styles.alternative}>
              New to the app?{" "}
              <b>
                <Link to="/signup">Sign Up</Link>
              </b>
            </p>
          </div>
        ) : (
          <div className={styles.loggedIn}>
            <div className={styles.contentContainer}>
              <h2>{`Welcome Back, ${user.fname}!`}</h2>
            </div>

            <div className={styles.redirectLinks}>
              <Link to="./menstrualtracking">
                <div className={styles.menstrualLink}>
                  <h3>Menstrual Tracking</h3>
                </div>
              </Link>
              <Link to="./contraceptivetracking">
                <div className={styles.contraceptiveLink}>
                  <h3>Contraceptive Tracking</h3>
                </div>
              </Link>
              <Link to="./resources">
                <div className={styles.resourceLink}>
                  <h3>Resources</h3>
                </div>
              </Link>
            </div>
            {/* <Link to="/">Return to Home</Link> */}
          </div>
        )}
      </form>
    </div>
  );
}

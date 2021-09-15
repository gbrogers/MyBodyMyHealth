import styles from "./Login.module.scss";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
// import { hash } from "bcrypt";

// const bcrypt = require("bcryptjs");

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
        console.log(res.data);
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
      .catch((error) => console.log(error));
  }

  return (
    <div className={`${styles.login} page-layout`}>
      <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

        {!user ? (
          <div>
            <h2>Welcome Back!</h2>
            <h4>Enter Login Information Below</h4>
            <p className={styles.incorrectString}>{incorrectString}</p>
            <label>
              <p>Email: </p>
              <input type="email" placeholder="enter email" ref={email}></input>
            </label>
            <label>
              <p>Password: </p>
              <input
                type="password"
                placeholder="enter password"
                ref={password}
              ></input>
            </label>
            <button type="submit">Login</button>
            <p>
              New to the app?{" "}
              <b>
                <Link to="/signup">Sign Up</Link>
              </b>
            </p>
          </div>
        ) : (
          <div>
            <h2>{`Welcome Back, ${user.fname}!`}</h2>
            <Link to="/">Return to Home</Link>
            {/* <Logout /> */}
          </div>
        )}
      </form>
    </div>
  );
}

import styles from "./Login.module.scss";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

import Logout from "../Logout/Logout";
const bcrypt = require("bcryptjs");

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const email = useRef();
  const password = useRef();

  //Password Hashing
  function handleHashing(password) {
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);
    return passwordHash;
  }

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    const credentials = {
      email: email.current.value,
      password: handleHashing(password.current.value),
    };

    // console.log({ credentials });

    await axios
      .post("/api/authenticate/login", credentials)
      .then((res) => {
        if (res.data !== false) {
          const currentUser = res.data;
          setUser(currentUser);
          setIsAuth(true);
          //need to redirect to home following success
        }
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

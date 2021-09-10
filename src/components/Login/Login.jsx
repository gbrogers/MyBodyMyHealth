import styles from "./Login.module.scss";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

import Logout from "../Logout/Logout";
const bcrypt = require("bcryptjs");

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const email = useRef();
  const password = useRef();

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
      // password: password.current.value,
      password: handleHashing(password.current.value),
    };

    console.log({ credentials });

    await axios
      .post("/api/authenticate/login", credentials)
      .then((res) => {
        console.table(`res.data:  ${res.data}`);
        if (res.data !== false) {
          const currentUser = res.data;
          // sessionStorage.setItem("email", res.data.email);
          setUser(currentUser);
          //need to redirect to home following success
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={`${styles.login} page-layout`}>
      <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
        <pre>{JSON.stringify(user, null, 2)}</pre>

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
            <Logout />
          </div>
        )}
      </form>
    </div>
  );
}

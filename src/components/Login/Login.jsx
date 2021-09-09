import styles from "./Login.module.scss";
import { useState, useRef } from "react";
import axios from "axios";
// import bcrypt from "bcrypt";
// const bcrypt = require("bcrypt"); // error here when trying to has password (aws-sdk)
// const saltRounds = 10;

export default function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { isLoggedIn, setIsLoggedIn } = props;
  const email = useRef();
  const password = useRef();

  function handleHashing(password) {
    // bcrypt.genSalt(saltRounds, function (err, salt) {
    //   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    //     // Store hash in your password DB.
    //   });
    // });
  }

  async function handleLogin(e) {
    e.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);

    const credentials = {
      email: email.current.value,
      password: password.current.value,
      // password: hashedPass,
    };

    console.log({ credentials });

    await axios
      .post("/api/authenticate/login", credentials)
      .then((res) => {
        console.log(res.data);
        if (res.data !== false) {
          // Save data to sessionStorage
          console.log(res.data.email);
          sessionStorage.setItem("email", res.data.email);
          setIsLoggedIn(true);
          //need to redirect to home following success
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={`${styles.login} page-layout`}>
      <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
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
      </form>
    </div>
  );
}

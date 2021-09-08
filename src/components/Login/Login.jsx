import styles from "./Login.module.scss";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   function handleHashing(value) {
  //     return true;
  //   }

  function handleLogin(e) {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    console.log(credentials);

    axios
      .get("/api/authenticate/login")
      .then((res) => {
        console.log("in axios get");
      })
      .catch(() => console.log("in catch block"));
    // axios
    //   .post("/api/authenticate/login", credentials)
    //   .then((res) => {
    //     console.log("in axios post");
    //   })
    //   .catch(() => console.log("in catch block"));
  }

  //
  return (
    <div className={`${styles.login} page-layout`}>
      <form className={styles.loginForm} onSubmit={(e) => handleLogin(e)}>
        <h2>Welcome Back!</h2>
        <h4>Enter Login Information Below</h4>
        <label>
          <p>Email: </p>
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          <p>Password: </p>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

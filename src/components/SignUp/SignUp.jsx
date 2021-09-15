import styles from "./SignUp.module.scss";
import { useRef, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";

import Logout from "../Logout/Logout";

export default function SignUp() {
  const { user, setUser } = useContext(UserContext);
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const email = useRef();
  const password = useRef();
  const fname = useRef();
  const lname = useRef();

  async function handleLogin(e) {
    e.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);

    const credentials = {
      email: email.current.value,
      password: password.current.value,
      fname: fname.current.value,
      lname: lname.current.value,
    };

    console.log({ credentials });

    await axios
      .post("/api/authenticate/signup", credentials)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsAuth(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={`${styles.signup} page-layout`}>
      <form className={styles.signupForm} onSubmit={(e) => handleLogin(e)}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        {!user ? (
          <div>
            <h2>Welcome!</h2>
            <h4>Sign Up to get started here.</h4>
            <label>
              <p>First Name: </p>
              <input
                type="text"
                placeholder="enter first name"
                ref={fname}
              ></input>
            </label>
            <label>
              <p>Last Name: </p>
              <input
                type="text"
                placeholder="enter last name"
                ref={lname}
              ></input>
            </label>
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
            <button type="submit">Sign Up</button>
            <p>
              Already have and account?{" "}
              <b>
                <Link to="/login">Log in</Link>
              </b>
            </p>
          </div>
        ) : (
          <h2>{`Welcome, ${user.fname}!`}</h2>
        )}
      </form>
    </div>
  );
}

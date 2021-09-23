import React, { useContext } from "react";
import styles from "./Logout.module.scss";
import { Redirect } from "react-router-dom";

import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";

const Logout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  return (
    <div className={`${styles.logout} page-layout`}>
      <div className={styles.logoutContainer}>
        <h2>Thanks for visiting! See you again soon.</h2>
      </div>
    </div>
  );
};
export default Logout;

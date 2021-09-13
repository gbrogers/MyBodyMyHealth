import React, { useContext } from "react";
import styles from "./Logout.module.scss";
import { Redirect } from "react-router-dom";

import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";

const Logout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="page-layout">
      <div className={styles.logoutPage}>
        <h2>Thanks for visiting! See you again soon.</h2>
        <button
          className={styles.logoutBtn}
          onClick={() => {
            setUser(null);
            setIsAuth(false);
            if (!isAuth) {
              return <Redirect to="/login" />;
            }
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Logout;

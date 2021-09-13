import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { AuthContext } from "../../AuthContext";

const Logout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setUser(null);
        setIsAuth(false);
      }}
    >
      Log Out
    </button>
  );
};
export default Logout;

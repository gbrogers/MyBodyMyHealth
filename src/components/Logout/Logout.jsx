import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  return <button onClick={() => setUser(null)}>Log Out</button>;
};
export default Logout;

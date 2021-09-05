import React from "react";
// import "./App.module.scss";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Authenticate() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

import reactDom from "react-dom";
import React from "react";

export default function SetUpForm() {
  return (
    <form>
      <label htmlFor="age">Enter Age:</label>
      <input id="age" type="text"></input>
    </form>
  );
}

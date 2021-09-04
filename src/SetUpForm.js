import reactDom from "react-dom";
import React from "react";

import styles from "./SetUpForm.module.scss";

export default function SetUpForm() {
  return (
    <form className={styles.setUpForm}>
      <div>
        <label>
          Enter your age:
          <input type="number" name="num" min="0" max="80"></input>
        </label>

        <label>
          Sex at Birth:
          <select name="sex" id="sex">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Are you Pregnant?
          <label>
            {" "}
            <input type="radio" name="pregnant" value="yes" checked></input>Yes
          </label>
          <label>
            <input type="radio" name="pregnant" value="no" checked></input>No
          </label>
        </label>

        <label>
          Are you Sexually Active?
          <label>
            {" "}
            <input type="radio" name="sex" value="yes" checked></input>Yes
          </label>
          <label>
            <input type="radio" name="sex" value="no" checked></input>No
          </label>
        </label>
        <label>
          Do you use tobacco?
          <label>
            {" "}
            <input type="radio" name="tobacco" value="yes" checked></input>Yes
          </label>
          <label>
            <input type="radio" name="tobacco" value="no" checked></input>No
          </label>
        </label>
      </div>
    </form>
  );
}

import reactDom from "react-dom";
import React, { useState } from "react";

import styles from "./SetUpForm.module.scss";

export default function SetUpForm(props) {
  const { setSex, setSexActive, setAge, setPregnant, setTobacco } = props;

  return (
    <form className={styles.setUpForm}>
      <label>
        1. Enter your age:
        <input
          type="number"
          name="num"
          min="0"
          max="80"
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </label>

      <label>
        2. Sex at Birth:
        <select name="sex" id="sex" onChange={(e) => setSex(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </label>

      <label>
        3. Are you Pregnant?
        <label>
          {" "}
          <input
            type="radio"
            name="pregnant"
            value="yes"
            checked
            onChange={(e) => setPregnant(e.target.value)}
          ></input>
          Yes
        </label>
        <label>
          <input type="radio" name="pregnant" value="no" checked></input>No
        </label>
      </label>

      <label>
        4. Are you Sexually Active?
        <label>
          {" "}
          <input
            type="radio"
            name="sex"
            value="yes"
            checked
            onChange={(e) => setSexActive(e.target.value)}
          ></input>
          Yes
        </label>
        <label>
          <input type="radio" name="sex" value="no" checked></input>No
        </label>
      </label>
      <label>
        5. Do you use tobacco?
        <label>
          {" "}
          <input
            type="radio"
            name="tobacco"
            value="yes"
            checked
            onChange={(e) => setTobacco(e.target.value)}
          ></input>
          Yes
        </label>
        <label>
          <input type="radio" name="tobacco" value="no" checked></input>No
        </label>
      </label>
    </form>
  );
}

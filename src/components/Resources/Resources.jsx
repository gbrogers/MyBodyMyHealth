import React, { useEffect, useState } from "react";
import axios from "axios";
import SetUpForm from "../SetUpForm/SetUpForm";
import styles from "./Resources.module.scss";
import e from "cors";

export default function Resources() {
  const [resourceList, setResourceList] = useState([]);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Female");
  const [pregnant, setPregnant] = useState("No");
  const [tobacco, setTobacco] = useState("No");
  const [sexActive, setSexActive] = useState("No");

  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";
  // https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no

  // useEffect(() => {
  //   console.log({ resourceList });
  // }, [resourceList]);

  const generateResource = (e, age, sex, pregnant, sexActive, tobacco) => {
    // e.preventDefault();
    console.log("in generateResource");
    axios
      .get(
        `${baseURL}?age=${age}&sex=${sex}&pregnant=${pregnant}&sexuallyActive=${sexActive}&tobaccoUse=${tobacco}`
      )
      .then((res) => {
        setResourceList(res.data.Result.Resources.all.Resource);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={`${styles.displayResources} page-layout`}>
      <h1>Resources Page</h1>
      <SetUpForm
        setAge={setAge}
        setSex={setSex}
        setPregnant={setPregnant}
        setTobacco={setTobacco}
        setSexActive={setSexActive}
      />
      <button
        onClick={() => generateResource(age, sex, pregnant, tobacco, sexActive)}
      >
        Press Me for Resource
      </button>
      <ul className={styles.personalizedResources}>
        {resourceList.map((item) => {
          const {
            Id,
            AccessibleVersion,
            Title,
            ImageUrl,
            ImageAlt,
            MyHFCategoryHeading,
          } = item;

          return (
            <li key={Id} className={styles.individualResource}>
              <a href={AccessibleVersion} target="_blank">
                <img src={ImageUrl} alt={ImageAlt}></img>

                <h3>{Title}</h3>
              </a>
              {/* {MyHFCategoryHeading} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

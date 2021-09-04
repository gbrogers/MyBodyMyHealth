import React, { useEffect, useState } from "react";
import axios from "axios";
import SetUpForm from "./SetUpForm";
import styles from "./Resources.module.scss";

export default function Resources() {
  const [resourceList, setResourceList] = useState([]);

  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";
  // https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no

  // useEffect(() => {
  //   console.log({ resourceList });
  // }, [resourceList]);

  const generateResource = (age, sex, pregnant, sexActive, tobacco) => {
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
    <div className={styles.displayResources}>
      <h1>Resources Page</h1>
      <SetUpForm />
      <button onClick={() => generateResource(25, "female", "no", "yes", "no")}>
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
              <img src={ImageUrl} alt={ImageAlt}></img>
              <a href={AccessibleVersion} target="_blank">
                {Title}
              </a>
              {/* {MyHFCategoryHeading} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

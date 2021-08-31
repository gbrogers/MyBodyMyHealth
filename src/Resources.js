import React from "react";
import axios from "axios";

export default function Resources() {
  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";
  // https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no

  const generateResource = (age, sex, pregnant, sexActive, tobacco) => {
    console.log("in generateResource");
    axios
      .get(
        `${baseURL}?age=${age}&sex=${sex}&pregnant=${pregnant}&sexuallyActive=${sexActive}&tobaccoUse=${tobacco}`
      )
      .then((res) => {
        // console.log(res.data.result.result.resources);
        console.log(res.data.result); //logging undefined
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Resources Page</h1>
      <button onClick={generateResource(35, "female", "no", "yes", "no")}>
        Press Me for Resource
      </button>
    </>
  );
}

import React from "react";
import axios from "axios";

export default function Resources() {
  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";
  // https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no

  const displayResource = (resources) => {
    return (
      <div className="personalizedResources">
        {resources.map((item) => {
          let url = item.AccessibleVersion;
          let title = item.Title;
          // console.log(url);
          return <div key={item}>{title}</div>;
        })}
      </div>
    );
  };

  const generateResource = (age, sex, pregnant, sexActive, tobacco) => {
    console.log("in generateResource");
    axios
      // .get(
      //   "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no"
      // )
      .get(
        `${baseURL}?age=${age}&sex=${sex}&pregnant=${pregnant}&sexuallyActive=${sexActive}&tobaccoUse=${tobacco}`
      )
      .then((res) => {
        // console.log(res.data.result.result.resources);
        let resources = res.data.Result.Resources.all.Resource;
        // console.log(res.data);
        console.log(resources);
        //want Title and AccessibleVersion
        displayResource(resources);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Resources Page</h1>
      <button onClick={() => generateResource(25, "female", "no", "yes", "no")}>
        Press Me for Resource
      </button>
    </>
  );
}

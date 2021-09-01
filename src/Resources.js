import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <>
      <h1>Resources Page</h1>
      <button onClick={() => generateResource(25, "female", "no", "yes", "no")}>
        Press Me for Resource
      </button>
      <ul className="personalizedResources">
        {resourceList.map((item) => {
          let url = item.AccessibleVersion;
          let title = item.Title;
          return (
            <li key={item.Id}>
              <a href={url}>{item.Title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

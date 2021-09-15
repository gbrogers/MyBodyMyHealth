import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SetUpForm from "../SetUpForm/SetUpForm";
import SavedResources from "../SavedResources/SavedResources";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./Resources.module.scss";
import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";

import { UserContext } from "../../UserContext";
import { withRouter } from "react-router-dom";

function Resources() {
  const [resourceList, setResourceList] = useState([]);
  const [dropDown, setDropDown] = useState(true);
  const [showSaved, setShowSaved] = useState(false);

  const [userSavedResources, setuserSavedResources] = useState([]);
  const { user, setUser } = useContext(UserContext);
  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images

  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";

  useEffect(() => {
    const user_id = user.id;
    axios
      .get(`/api/getSavedArticles/${user_id}`)
      .then((res) => {
        console.log(res.data);
        setuserSavedResources(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const generateResource = (age, sex, pregnant, sexActive, tobacco) => {
    // e.preventDefault();
    console.log("in generateResource");
    axios
      .get(
        `${baseURL}?age=${age}&sex=${sex}&pregnant=${pregnant}&sexuallyActive=${sexActive}&tobaccoUse=${tobacco}`
      )
      .then((res) => {
        console.log(res.data);
        setResourceList([
          ...res.data.Result.Resources.all.Resource,
          ...res.data.Result.Resources.some.Resource,
          ...res.data.Result.Resources[
            "You may also be interested in these health topics:"
          ].Resource,
        ]);
      })
      .catch((error) => console.log(error));
  };

  function saveResource(resourceInfo) {
    let value = resourceInfo.split(",");
    const title = value[0];
    const url = value[1];
    const requestBody = {
      user_id: user.id,
      title,
      url,
    };
    axios
      .post("/api/saveArticle", requestBody)
      .then((res) => {
        console.log(res.data);
        if (res.data !== "no thanks") {
          setuserSavedResources(res.data);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={`${styles.displayResources} page-layout`}>
      <div>
        <div>
          <div className={styles.headerContainer}>
            <h1 className={styles.pageTitle}>Resources</h1>
          </div>
          <div className={styles.dropdowns}>
            <div className={styles.resourceContainer}>
              <button
                className={styles.showBtn}
                onClick={() => {
                  setShowSaved(!showSaved);
                  setDropDown(!dropDown);
                }}
              >
                <img src={srcDropDown}></img>
                <h2 className={styles.savedHeader}>Your Saved Articles</h2>
              </button>
              {showSaved && (
                <div className={styles.listContainer}>
                  <ol className={styles.savedList}>
                    {userSavedResources.map((item) => {
                      return <SavedResources item={item} />;
                    })}
                  </ol>
                </div>
              )}
            </div>
            <div>
              <SetUpForm generateResource={generateResource} />
            </div>
          </div>
        </div>

        <ul className={styles.personalizedResources}>
          {resourceList.map((item) => {
            return <ResourceCard item={item} saveResource={saveResource} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Resources);

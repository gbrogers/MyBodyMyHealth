import styles from "./Resources.module.scss";

import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import SetUpForm from "../SetUpForm/SetUpForm";
import SavedResources from "../SavedResources/SavedResources";
import ResourceCard from "../ResourceCard/ResourceCard";
import { UserContext } from "../../UserContext";

import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";
import Smiley from "../../images/smiley.png";
import HealthLiteracy from "../../images/healthLiteracy.png";

function Resources() {
  const [resourceList, setResourceList] = useState([]);
  const [dropDown, setDropDown] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userSavedResources, setuserSavedResources] = useState([]);
  const { user, setUser } = useContext(UserContext);

  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images

  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";

  //load previously saved articles on page render
  useEffect(() => {
    const user_id = user.id;
    axios
      .get(`/api/getSavedArticles/${user_id}`)
      .then((res) => {
        // console.log(res.data);
        setuserSavedResources(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // find resources from external API using user input
  const generateResource = (age, sex, pregnant, sexActive, tobacco) => {
    setIsLoading(true);
    axios
      .get(
        `${baseURL}?age=${age}&sex=${sex}&pregnant=${pregnant}&sexuallyActive=${sexActive}&tobaccoUse=${tobacco}`
      )
      .then((res) => {
        setIsLoading(false);
        // console.log(res.data);
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

  // add resources to DB
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
        // console.log(res.data);
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
          <div className={styles.quoteContainer}>
            <div className={styles.quote}>
              <img src={HealthLiteracy} alt="health literacy icon"></img>
              <div>
                <b>Personal health literacy</b> is crucial when advocating for
                yourself in a healthcare system and beyond. According to the
                CDC,
                <em>
                  "Personal health literacy is the degree to which individuals
                  have the ability to find, understand, and use information and
                  services to inform health-related decisions and actions for
                  themselves and others."
                </em>{" "}
                The below resource generator makes calls to a Health.gov API to
                return verified health resources to help promote your personal
                health literacy. Get started (or continue) advocating for
                yourself through improving your health literacy by generating
                personal resources below.
              </div>
            </div>
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
                      return <SavedResources user_id={user.id} item={item} />;
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

        {isLoading ? (
          <div className={styles.loading}>
            <h3>
              Loading your resources {"  "}
              <img src={Smiley} alt="smiley"></img>
              {"  "}...
            </h3>
          </div>
        ) : (
          <ul className={styles.personalizedResources}>
            {resourceList.map((item) => {
              return <ResourceCard item={item} saveResource={saveResource} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default withRouter(Resources);

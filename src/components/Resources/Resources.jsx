import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SetUpForm from "../SetUpForm/SetUpForm";
import SavedResources from "../SavedResources/SavedResources";
import ResourceCard from "../ResourceCard/ResourceCard";
import styles from "./Resources.module.scss";
import { UserContext } from "../../UserContext";
import { withRouter } from "react-router-dom";

function Resources() {
  const [resourceList, setResourceList] = useState([]);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Female");
  const [pregnant, setPregnant] = useState("No");
  const [tobacco, setTobacco] = useState("No");
  const [sexActive, setSexActive] = useState("No");
  const [userSavedResources, setuserSavedResources] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const baseURL =
    "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json";

  useEffect(() => {
    console.log(user.id);
    const user_id = user.id;

    // const fetchUser = async () => {

    // }
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
          <h1 className={styles.pageTitle}>Resources</h1>
          <div className={styles.setUpContainer}>
            <div className={styles.setUpWords}>
              <SetUpForm
                setAge={setAge}
                setSex={setSex}
                setPregnant={setPregnant}
                setTobacco={setTobacco}
                setSexActive={setSexActive}
              />
              <button
                className={styles.generateResource}
                onClick={() =>
                  generateResource(age, sex, pregnant, tobacco, sexActive)
                }
              >
                Generate Resources
              </button>
            </div>
          </div>
        </div>
        <div>
          <SavedResources userSavedResources={userSavedResources} />
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

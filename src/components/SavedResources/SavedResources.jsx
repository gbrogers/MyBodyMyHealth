import react, { useState } from "react";
import styles from "./SavedResources.module.scss";
import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";

export default function SavedResources(props) {
  const { userSavedResources } = props;
  const [dropDown, setDropDown] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images

  return (
    <div className={styles.container}>
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
              return (
                <li>
                  <h3>{item.name}</h3>
                  <a href={item.url} target="_blank">
                    View
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

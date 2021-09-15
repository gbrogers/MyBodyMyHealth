import react, { useState } from "react";
import styles from "./SavedResources.module.scss";
import axios from "axios";

export default function SavedResources({ item }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function removeResource(name) {
    axios
      .delete(`/api/removeResource/${name}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <li className={styles.individualResource}>
      <h3>{item.name}</h3>
      <div>
        <a href={item.url} target="_blank">
          View
        </a>
        {isDeleted ? (
          <button className={styles.deleteBtn}>Deleted!</button>
        ) : (
          <button
            className={styles.deleteBtn}
            onClick={() => {
              removeResource(item.name);
              setIsDeleted(true);
            }}
          >
            Remove
          </button>
        )}
      </div>
    </li>
  );
}

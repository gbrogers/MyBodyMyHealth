import react, { useState } from "react";
import styles from "./SavedResources.module.scss";
import axios from "axios";

export default function SavedResources({ user_id, item }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function removeResource() {
    const name = item.name;
    const requestBody = {
      name: item.name,
      user_id: user_id,
    };
    console.log(requestBody);
    axios
      .delete("/api/removeResource/", {
        data: {
          body: requestBody,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <li key={item.id} className={styles.individualResource}>
      <h3>{item.name}</h3>
      <div>
        <a href={item.url} target="_blank">
          View
        </a>
        {isDeleted ? (
          <button className={styles.deleteBtn}>Removed!</button>
        ) : (
          <button
            className={styles.deleteBtn}
            onClick={() => {
              removeResource();
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

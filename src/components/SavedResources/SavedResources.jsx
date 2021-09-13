import react from "react";
import styles from "./SavedResources.module.scss";

export default function SavedResources(props) {
  const { userSavedResources } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.savedHeader}>Your Saved Articles</h2>
      <ul className={styles.savedList}>
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
      </ul>
    </section>
  );
}

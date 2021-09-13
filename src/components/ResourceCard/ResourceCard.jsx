import react, { useState } from "react";
import styles from "./ResourceCard.module.scss";

export default function ResourceCard({ item, saveResource }) {
  console.log({ item });
  // const { item, saveResource } = props;
  const [isSaved, setIsSaved] = useState(false);
  const { Id, AccessibleVersion, Title, ImageUrl, ImageAlt } = item;
  return (
    <li key={Id} className={styles.individualResource}>
      <img src={ImageUrl} alt={ImageAlt}></img>

      <h3>{Title}</h3>
      <div className={styles.resourceOptions}>
        <a href={AccessibleVersion} target="_blank">
          LEARN MORE
        </a>

        {!isSaved ? (
          <button
            value={[Title, AccessibleVersion]}
            onClick={(e) => {
              saveResource(e.target.value);
              setIsSaved(true);
            }}
          >
            Save For Later
          </button>
        ) : (
          <button>Saved</button>
        )}

        {/* <button
                    value={[Title, AccessibleVersion]}
                    onClick={(e) => {
                      saveResource(e.target.value);
                      setIsSaved(true);
                    }}
                  >
                    Save For Later
                  </button> */}
      </div>

      {/* {MyHFCategoryHeading} */}
    </li>
  );
}

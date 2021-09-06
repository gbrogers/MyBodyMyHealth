import styles from "./Home.module.scss";
import MainSectionImg from "../../images/bc-types-home.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <section className={styles.sectionOne}>
          <div>
            <div>
              <h2>Take control of your health</h2>
              <p>
                Measure your cycle and get relevant information from trusted
                sources.
              </p>
              <button className={styles.getStartedBtn}>Get Started</button>
            </div>
            <img src={MainSectionImg} className={styles.mainSectionImg}></img>
          </div>
        </section>
        <section className={styles.secondSection}>
          {/* <h2>Section 2</h2> */}
          <div className={styles.blueSection}></div>
          <div className={styles.circleIcons}>
            <div>Icon 1</div>
            <div>Icon 2</div>
            <div>Icon 3</div>
            <div>Icon 4</div>
          </div>
        </section>
        <section>
          <h2>Section 3</h2>
        </section>
        <section>
          <h2>Section 4</h2>
        </section>
      </div>
    </div>
  );
}

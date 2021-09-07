import styles from "./Home.module.scss";
import MainSectionImg from "../../images/bc-types-home.jpg";
import Triangle from "../../images/home-triangle.svg";
import ThreeFaces from "../../images/threefaces.jpg";
import Runner from "../../images/runner.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <section className={styles.sectionOne}>
          <div>
            <div>
              <h1>My Body My Health</h1>
              <p>
                Your health is so often put on the back burners. Put a stop to
                that TODAY and grab hold to your health and your future. My Body
                My Health allows you to take control of aspects of your health
                such as menstrual tracking, contraceptive tracking, and provides
                both personalized and generic health resources at the tips of
                your fingers.
              </p>
              <button className={styles.getStartedBtn}>Get Started</button>
            </div>
            <img src={MainSectionImg} className={styles.mainSectionImg}></img>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.blueSection}>
            {/* <h2>Section 2</h2> */}
            <div className={styles.circleIcons}>
              <div>Icon 1</div>
              <div>Icon 2</div>
              <div>Icon 3</div>
              <div>Icon 4</div>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <h2>Section 3</h2>
        </section>
        <section className={styles.sectionFour}>
          <div className={styles.mustardSqr}>
            <h2>Explore Resources</h2>
            <p>Get information by topic, or personalized just for you.</p>
            <button className={styles.getStartedBtn}>Learn More</button>
          </div>

          <img src={ThreeFaces} className={styles.threeFaces}></img>
          <img src={Runner} className={styles.runner}></img>
        </section>
        <section>
          <h2>Section 5</h2>
        </section>
      </div>
    </div>
  );
}

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

//image components
import MainSectionImg from "../../images/bc-types-home.jpg";
// import Triangle from "../../images/home-triangle.svg";
// import ThreeFaces from "../../images/threefaces.jpg";
// import Runner from "../../images/runner.jpg";
import Research from "../../images/research.jpg";
import MethodsIcon from "../../images/methods.png";
import UterusIcon from "../../images/uterus.png";
import BrainIcon from "../../images/brain.png";
import ResourcesIcon from "../../images/resources.png";

export default function Home() {
  return (
    <div className={`${styles.home} page-layout`}>
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
              <Link to="/signup">
                <button className={styles.getStartedBtn}>Get Started</button>
              </Link>
            </div>
            <img src={MainSectionImg} className={styles.mainSectionImg}></img>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.blueSection}>
            <div className={styles.circleIcons}>
              <div className={styles.circle1}>
                {/* <p>This is text information </p> */}
                <div className={styles.individualCircle}>
                  <img className={styles.methodIcon} src={MethodsIcon}></img>
                </div>
              </div>

              <div className={styles.circle2}>
                <div className={styles.individualCircle}>
                  <img
                    className={styles.resourcesIcon}
                    src={ResourcesIcon}
                  ></img>
                </div>
                {/* <p>This is text information </p> */}
              </div>

              <div className={styles.circle3}>
                {/* <p>This is text information </p> */}
                <div className={styles.individualCircle}>
                  <img className={styles.bodyIcon} src={UterusIcon}></img>
                </div>
              </div>
              <div className={styles.circle4}>
                <div className={styles.individualCircle}>
                  <img className={styles.brainIcon} src={BrainIcon}></img>
                </div>
                {/* <p>This is text information </p> */}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.quoteContainer}>
            <p>
              "Reproductive freedom is critical to a whole range of issues. If
              we can’t take charge of this most personal aspect of our lives, we
              can’t take care of anything. It should not be seen as a privilege
              or as a benefit, but a fundamental human right." <br></br>
              <span className={styles.author}>- Faye Wattleton</span>
            </p>
          </div>
        </section>
        <section className={styles.sectionFour}>
          {/* <img src={ThreeFaces} className={styles.threeFaces}></img> */}
          <img src={Research} className={styles.research}></img>
          <div className={styles.mustardSqr}>
            <h2>Explore Resources</h2>
            <p>Get information by topic, or personalized just for you.</p>
            <Link to="/resources">
              <button className={styles.getStartedBtn}>Learn More</button>
            </Link>
          </div>
        </section>
        <section className={styles.sectionFive}>
          <div className={styles.demonstration}></div>
          <div className={styles.caption}>
            <h2>Visually monitor your progress </h2>
            <p>Sign up to get started today</p>
            <div className={styles.sectionFiveBtns}>
              <Link to="/menstrualtracking">
                <button className={styles.getStartedBtn}>
                  Menstrual Tracking
                </button>
              </Link>
              <Link to="/contraceptivetracking">
                <button className={styles.loginBtn}>
                  Contraceptive Tracking
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

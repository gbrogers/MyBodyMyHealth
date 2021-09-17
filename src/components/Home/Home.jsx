import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import react, { useState } from "react";

//image components
import MainSectionImg from "../../images/bc-types-home.jpg";
import Research from "../../images/research.jpg";
import MethodsIcon from "../../images/methods.png";
import UterusIcon from "../../images/uterus.png";
import BrainIcon from "../../images/brain.png";
import ResourcesIcon from "../../images/resources.png";
import Camping from "../../images/camping.jpg";

export default function Home() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className={`${styles.home} page-layout`}>
      <div>
        <section className={styles.sectionOne}>
          <div>
            <div>
              <h1>My Body My Health</h1>
              {seeMore ? (
                <p>
                  {/* Take hold of the very basics of your sexual and reproductive
                health through providing health resources specific to you and a
                platform for contraceptive and menstrual tracking. */}
                  The US's current health care system is lacking in meeting the
                  needs of many inidividuals, regardless of sex and gender, but
                  especially for those individuals with a uterus. Sexual and
                  reproductive health needs are lifelong and cannot continue to
                  take the back burners. My Body My Health can help with the
                  very basics of taking hold of your unique health needs. My
                  Body My Health helps you keep track of you menstrual cycle and
                  it's side effects, assists you in tracking the use of your
                  birth control method so that you ensure you are properly
                  protected from pregnany when you want to be, and finally
                  provides verified resources specific to your needs, based on
                  input from you.{" "}
                  <button
                    className={styles.seeMoreBtn}
                    onClick={() => setSeeMore(!seeMore)}
                  >
                    See Less
                  </button>
                </p>
              ) : (
                <p>
                  The US's current health care system is lacking in meeting the
                  needs of many inidividuals, regardless of sex and gender, but
                  especially for those individuals with a uterus. Sexual and
                  reproductive health needs are lifelong and cannot continue to
                  take the back burners. My Body My Health can help with the
                  very basics of taking hold of your unique health needs.
                  <button
                    className={styles.seeMoreBtn}
                    onClick={() => setSeeMore(!seeMore)}
                  >
                    See More
                  </button>
                </p>
              )}
              <Link to="/menstrualtracking">
                <button className={styles.getStartedBtn}>Get Started</button>
              </Link>
            </div>
            <img src={MainSectionImg} className={styles.mainSectionImg}></img>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.blueSection}>
            {/* <div className={styles.blueContent}> */}
            {/* <p className={styles.blueWords}>
                The US's current healthcare system is lacking in meeting the
                needs of many inidividuals, regardless of sex and gender, but
                especially for those individuals with a uterus. Women's health
                is so much larger than just gynecology, but it is a part of it.
                Sexual and reproductive health needs are lifelong and cannot
                continue to take the back burners. My Body My Health can help
                with the very basics of taking hold of your unique sexual and
                reproductive health needs. My Body My Health helps you keep
                track of you menstrual cycle and it's side effects, assists you
                in tracking the use of your birth control method so that you
                ensure you are properly protected from pregnany when you want to
                be, and finally provides verified resources specific to your
                needs, based on input from you.
              </p> */}
            {/* <img
                className={styles.campingImg}
                src={Camping}
                alt="camping"
              ></img> */}
            {/* </div> */}

            <div className={styles.circleIcons}>
              <div className={styles.circle1}>
                <p>
                  Visually track the use of your birth control method to ensure
                  effectiveness that meets your personal goals.
                </p>
                <div className={styles.individualCircle}>
                  <Link to="./contraceptivetracking">
                    <img className={styles.methodIcon} src={MethodsIcon}></img>
                  </Link>
                </div>
              </div>

              {/* <div className={styles.circle2}>
                <div className={styles.individualCircle}>
                  <img
                    className={styles.resourcesIcon}
                    src={ResourcesIcon}
                  ></img>
                </div>
                <p>This is text information </p>
              </div> */}

              <div className={styles.circle2}>
                <p>
                  Visually track your menstrual cycle and keep notes to track
                  you mood, activity level, body, symptoms, and more.
                </p>
                <div className={styles.individualCircle}>
                  <Link to="./menstrualtracking">
                    <img className={styles.bodyIcon} src={UterusIcon}></img>
                  </Link>
                </div>
              </div>
              <div className={styles.circle2}>
                <p>
                  Find and save resources for you, based on sex, age, tobacco
                  use, sexual activity, and pregnancy status.
                </p>
                <div className={styles.individualCircle}>
                  <Link to="./resources">
                    <img className={styles.brainIcon} src={BrainIcon}></img>
                  </Link>
                </div>
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
            <p>
              Search for evidence-based health information personalized just for
              you.
            </p>
            <button className={styles.getStartedBtn}>
              <Link to="/resources">Learn More</Link>
            </button>
          </div>
        </section>
        <section className={styles.sectionFive}>
          <div className={styles.demonstration}></div>
          <div className={styles.caption}>
            <h2>Visually monitor your progress </h2>
            <p>
              The visual accessibility of tracking on a calendar makes all the
              difference. Don't trust us, try it out for yourself!
            </p>
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

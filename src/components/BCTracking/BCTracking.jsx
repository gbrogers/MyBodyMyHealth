import styles from "./BCTracking.module.scss";
import "react-calendar/dist/Calendar.css";
import { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import moment from "moment";

import { UserContext } from "../../UserContext";
import BirthControl from "../BirthControl/BirthControl";

import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";
import Methods from "../../images/methods.svg";
import Check from "../../images/checkmark.png";

function BCTracking() {
  const [bcTaken, setBCTaken] = useState([]);
  const [showBC, setShowBC] = useState(false);
  const [showLastUse, setShowLastUse] = useState(false);
  const [dropDown, setDropDown] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dateState, setDateState] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [bcUsed, setBCUsed] = useState(false);
  const [birthControl, setBirthControl] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const { user, setUser } = useContext(UserContext);

  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images
  let srcDropDown2 = dropDown2 ? DownArrow : UpArrow; //update to src images

  //load previously added calendar dates and birthcontrol info when page renders
  useEffect(() => {
    const user_id = user.id;
    if (user.birth_control_id !== null) {
      const birth_control_id = user.birth_control_id;

      axios
        .get(`/api/getBirthControl/${birth_control_id}`)
        .then((res) => {
          console.log(res.data);
          setBirthControl(res.data);
        })
        .catch((error) => console.log(error));
    }
    axios
      .get(`/api/getBCDates/${user_id}`)
      .then((res) => {
        const dates = res.data;
        let dateArray = [];
        dates.map((instance) => {
          dateArray = [...dateArray, instance.date_taken];
        });
        setBCTaken(dateArray);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeDate = (e) => {
    setDateState(e);
  };

  function tileClassName({ date, view }) {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (bcTaken.find((dDate) => isSameDay(dDate, date))) {
      console.log("BC matched date");
      return "BC";
    }
  }
  function isSameDay(a, b) {
    const d = new Date(a);
    const dateA = `${d.getMonth()}${d.getDate()}${d.getYear()}`;
    const dateB = `${b.getMonth()}${b.getDate()}${b.getYear()}`;
    console.log(dateA === dateB);
    return dateA === dateB;
  }

  async function updateRecords() {
    if (bcUsed) {
      setBCUsed(false);
      const requestBody = {
        id: user.id,
        dateState,
      };
      axios
        .post("/api/addBCDate", requestBody)
        .then((res) => {
          const dates = res.data;
          let dateArray = [];
          dates.map((instance) => {
            dateArray = [...dateArray, instance.date_taken];
          });
          setBCTaken(dateArray);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("negative");
    }
  }

  function calcFrequency(frequencyKey) {
    switch (frequencyKey) {
      case "q7y":
        return "Lasts up to 7 years";
      case "q5y":
        return "Lasts up to 5 years";
      case "q3y":
        return "Lasts up to 3 years";
      case "q12y":
        return "Lasts up to 12 years";
      case "q3m":
        return "Recieve Every 3 Months";
      case "qm":
        return "Replace Monthly";
      case "qd":
        return "Take Daily";
      case "prn":
        return "Method must be used each time";
      case "once":
        return "This method does not need maintenance.";
      case "q4h":
        return "Must be done every 4 to 5 hours to be effective.";
    }
  }

  return (
    <div className={`${styles.birthControlTracking} page-layout`}>
      <div className={styles.headerContainer}>
        <h2
          className={styles.sectionHeader}
        >{`${user.fname}'s Contraceptive Tracking`}</h2>
      </div>
      <div className={styles.choose_bc}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(birthControl, null, 2)}</pre> */}

        <button
          className={styles.showBtn}
          onClick={() => {
            setShowBC(!showBC);
            setDropDown(!dropDown);
          }}
        >
          <img src={srcDropDown}></img>
          <h2 className={styles.dropDownHeader}>
            Select Your Method of Birth Control
          </h2>
        </button>
      </div>
      {showBC && (
        <BirthControl
          dropDown={dropDown}
          setDropDown={setDropDown}
          setShowBC={setShowBC}
          showBC={showBC}
          birthControl={birthControl}
          setBirthControl={setBirthControl}
        />
      )}

      <div className={styles.calendarPromptContainer}>
        <div className={`${styles.calendarContainer} "calendar-container"`}>
          <Calendar
            value={dateState}
            onChange={changeDate}
            tileClassName={tileClassName}
          />

          <div className={styles.bcCalendarLegend}>
            <div>
              <div className={styles.keyColor}></div>
              <h4>Birth Control Method Used</h4>
            </div>
          </div>
        </div>
        <aside>
          {birthControl !== null && birthControl.bc_type !== "no-method" && (
            <div className={styles.displayMethodContainer}>
              <h4 className={styles.methodHeader}>
                Your Saved Contraceptive Method
              </h4>

              <div className={styles.generatedBCInfo}>
                <img src={Methods} alt="birth control methods icon"></img>
                <div className={styles.bcDetailsContainer}>
                  <h5>{birthControl.bc_name}</h5>
                  {birthControl.bc_name !== birthControl.bc_type && (
                    <p>{`Type: ${birthControl.bc_type}`}</p>
                  )}
                  <p>{calcFrequency(birthControl.frequency)}</p>
                </div>
              </div>
            </div>
          )}
          <div className={styles.bc_checkin_container}>
            <form>
              <div className={styles.checkinHeaderContainer}>
                <h4 className={styles.methodHeader}>
                  Contraceptive Method Check-in
                </h4>
                <img
                  className={styles.check}
                  src={Check}
                  alt="check mark"
                ></img>
              </div>
              <p className={styles.checkinPrompt}>
                Did you use your contraceptive method on{" "}
                <b>{moment(dateState).format("MMMM Do YYYY")}</b>?
              </p>
              <div className={styles.bcCheckinBtns}>
                <div className={styles.yesNoBtn}>
                  <button
                    className={styles.yesBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      setBCUsed(true);
                      setIsDisabled(false);
                    }}
                  >
                    Yes
                  </button>

                  <button
                    className={styles.noBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDisabled(false);
                    }}
                  >
                    No
                  </button>
                </div>

                <button
                  className={styles.saveBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    updateRecords();
                    setIsDisabled(true);
                  }}
                  disabled={isDisabled}
                >
                  Save
                </button>
              </div>
            </form>
            <p class={styles.sideNote}>
              * Update previous days on the calendar by selecting the date and
              responding to the prompt for that particular day
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default withRouter(BCTracking);

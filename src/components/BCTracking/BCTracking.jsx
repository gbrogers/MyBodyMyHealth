import styles from "./BCTracking.module.scss";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import BirthControl from "../BirthControl/BirthControl";
import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";
import { withRouter } from "react-router-dom";

function BCTracking() {
  const [bcTaken, setBCTaken] = useState([]);
  const [showBC, setShowBC] = useState(false);
  const [showLastUse, setShowLastUse] = useState(false);
  const [dropDown, setDropDown] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dateState, setDateState] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [bcUsed, setBCUsed] = useState(false);

  const { user, setUser } = useContext(UserContext);

  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images
  let srcDropDown2 = dropDown2 ? DownArrow : UpArrow; //update to src images

  useEffect(() => {
    console.log("in effect");

    const user_id = user.id;
    //will send notes in this request too.

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
  async function changeLastDate(e) {
    setLastDate(e);
    handleLastDay();
  }

  //should be called at set up and when user says yes to use on particular day. Use switch statement as needed for types
  function handleLastDay() {
    // console.log("I made it to the handle function");
    // console.log(lastDate);
    const variable = Math.abs(lastDate.getTime() - new Date().getTime());
    // console.log(variable / (60 * 60 * 1000 * 24));
  }

  function tileClassName({ date, view }) {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (bcTaken.find((dDate) => isSameDay(dDate, date))) {
      console.log("BC matched date");
      return "BC";
    }
  }
  function isSameDay(a, b) {
    const d = new Date(a);
    // console.log(d.getMonth());
    // console.log(b.getMonth());
    const dateA = `${d.getMonth()}${d.getDate()}${d.getYear()}`;
    const dateB = `${b.getMonth()}${b.getDate()}${d.getYear()}`;
    console.log(dateA === dateB);
    return dateA === dateB;
  }

  async function updateRecords() {
    if (bcUsed) {
      setBCUsed(false);
      console.log("bc used");

      const requestBody = {
        id: user.id,
        dateState,
      };
      //will send notes in this request too.

      axios
        .post("/api/addBCDate", requestBody)
        .then((res) => {
          const dates = res.data;
          console.log("--------");
          console.log(dates);
          console.log("--------");
          let dateArray = [];
          dates.map((instance) => {
            dateArray = [...dateArray, instance.date_taken];
            console.log(dateArray);
            console.log(instance.date_taken);
          });
          setBCTaken(dateArray);
        })
        .catch((error) => console.log(error));
      // console.log(datesToAddTo);
    } else {
      console.log("negative");
    }
  }

  // async function handleLastUseDate(e) {
  //   e.preventDefault();
  //   setLastDate(date.current.value);
  //   const date1 = moment(dateState).format("YYYY-MM-DD");

  //   // await axios
  //   //   .post("/api/calcNextDose", { lastDate })
  //   //   .then()
  //   //   .catch((error) => console.log(error));
  // }

  return (
    <div className={`${styles.birthControlTracking} page-layout`}>
      <div className={styles.choose_bc}>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

        <button
          className={styles.showBtn}
          onClick={() => {
            setShowBC(!showBC);
            setDropDown(!dropDown);
          }}
        >
          <img src={srcDropDown}></img>
          Step One: Select Your Method of Birth Control
        </button>
      </div>
      {showBC && <BirthControl />}
      <div className={styles.lastTaken}>
        <button
          className={styles.showBtn}
          onClick={() => {
            setShowLastUse(!showLastUse);
            setDropDown2(!dropDown2);
          }}
        >
          <img src={srcDropDown2}></img>
          Step Two: Select the date of last use of specified Birth Control
          method.
        </button>
        {showLastUse && (
          <div>
            <p>
              When is the last time you used your method of birth control OR
              when was it last replaced?
            </p>
            <Calendar
              value={dateState}
              onChange={changeLastDate}
              tileClassName={styles.setUpCalendar}
            />
          </div>
        )}
      </div>
      <h2>My Contraceptive Tracking</h2>

      <div className="calendar-container">
        <Calendar
          value={dateState}
          onChange={changeDate}
          tileClassName={tileClassName}
        />
        <div className={styles.bcCalendarLegend}>
          <div>
            <div className={styles.yellowKey}></div>
            <h4>hello</h4>
          </div>
        </div>
      </div>
      <aside>
        <div className={styles.period_checkin_container}>
          <form>
            <label className={styles.period_checkin}>
              <p>
                Did you menstruate on{" "}
                <b>{moment(dateState).format("MMMM Do YYYY")}</b>?
              </p>
              <div className={styles.yesNoBtn}>
                <button
                  className={styles.yesBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setBCUsed(true);
                  }}
                >
                  Yes
                </button>
                <button
                  className={styles.noBtn}
                  onClick={(e) => e.preventDefault()}
                >
                  No
                </button>
              </div>
            </label>
            <label className={styles.notes}>
              <p>
                Enter any notes about today that you'd like to keep track of{" "}
              </p>
              <textarea placeholder="enter notes here"></textarea>
            </label>
            <button
              className={styles.saveBtn}
              onClick={(e) => {
                e.preventDefault();
                updateRecords();
              }}
            >
              Save
            </button>
          </form>
          <p>
            to update previous days on the calendar, just select the date and
            respond to the prompt for that particular day
          </p>
        </div>
      </aside>
    </div>
  );
}

export default withRouter(BCTracking);

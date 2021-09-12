import styles from "./BCTracking.module.scss";
import { useState, useRef, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import BirthControl from "../BirthControl/BirthControl";
import DownArrow from "../../images/downArrow.svg";
import UpArrow from "../../images/upArrow.svg";

export default function BCTracking() {
  const date4 = new Date(2021, 7, 13);
  const date5 = new Date(2021, 7, 16);
  const date6 = new Date(2021, 7, 17);

  const [bcTaken, setBCTaken] = useState([date4, date5, date6]);
  const [showBC, setShowBC] = useState(false);
  const [showLastUse, setShowLastUse] = useState(false);
  const [dropDown, setDropDown] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dateState, setDateState] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

  const { user, setUser } = useContext(UserContext);

  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images
  let srcDropDown2 = dropDown2 ? DownArrow : UpArrow; //update to src images

  const changeDate = (e) => {
    setDateState(e);
  };
  async function changeLastDate(e) {
    setLastDate(e);
    handleLastDay();
  }

  //should be called at set up and when user says yes to use on particular day. Use switch statement as needed for types
  function handleLastDay() {
    console.log("I made it to the handle function");
    console.log(lastDate);
    const variable = Math.abs(lastDate.getTime() - new Date().getTime());
    console.log(variable / (60 * 60 * 1000 * 24));
  }

  function tileClassName({ date, view }) {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (bcTaken.find((dDate) => isSameDay(dDate, date))) {
      console.log("BC matched date");
      return "BC";
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
        <pre>{JSON.stringify(user, null, 2)}</pre>

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

      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
      <aside className={styles.checkIn}>
        <h3>Check in!</h3>
        <label>Did you use your birth control method today?</label>
        <button>Yes</button>
        <button>No</button>
        <p>
          to update previous days on the calendar, just select the date and
          respond to the prompt for that particular day
        </p>
      </aside>
    </div>
  );
}

function isSameDay(a, b) {
  // console.log(a);
  // console.log(b);
  const dateA = `${a.getMonth()}${a.getDate()}`;
  const dateB = `${b.getMonth()}${b.getDate()}`;
  console.log(dateA === dateB);
  return dateA === dateB;
}

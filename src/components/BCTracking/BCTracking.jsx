import styles from "./BCTracking.module.scss";
import { useState, useRef, useContext } from "react";
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
  const [dropDown, setDropDown] = useState(true);
  const { user, setUser } = useContext(UserContext);

  let srcDropDown = dropDown ? DownArrow : UpArrow; //update to src images

  const [dateState, setDateState] = useState(new Date());
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

  return (
    <div className={`${styles.birthControlTracking} page-layout`}>
      <div className={styles.choose_bc}>
        <pre>{JSON.stringify(user, null, 2)}</pre>

        <button
          className={styles.showBCBtn}
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
      <h2>My Contraceptive Tracking</h2>
      <div className="calendar-container">
        <Calendar
          value={dateState}
          onChange={changeDate}
          tileClassName={tileClassName}
          // tileContent={tileContent}
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

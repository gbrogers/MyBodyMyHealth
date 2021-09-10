import styles from "./PeriodTracking.module.scss";
import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { UserContext } from "../../UserContext";

export default function PeriodTracking() {
  const date1 = new Date(2021, 7, 11);
  const date2 = new Date(2021, 7, 12);
  const date3 = new Date(2021, 7, 14);
  const { user, setUser } = useContext(UserContext);
  const [datesToAddTo, setdatesToAddTo] = useState([date1, date2, date3]);

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  function tileClassName({ date, view }) {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddTo.find((dDate) => isSameDay(dDate, date))) {
      console.log("matched date");
      return "period";
    }
  }

  return (
    <div className={`${styles.menstrualTracking} page-layout`}>
      <h2>My Menstruation Tracking</h2>
      <div className="calendar-container">
        <Calendar
          value={dateState}
          onChange={changeDate}
          tileClassName={tileClassName}
          // tileContent={tileContent}
        />
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

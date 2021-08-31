import "./BCTracking.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function BCTracking() {
  const date4 = new Date(2021, 7, 13);
  const date5 = new Date(2021, 7, 16);
  const date6 = new Date(2021, 7, 17);

  const [bcTaken, setBCTaken] = useState([date4, date5, date6]);

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
    <>
      <h2>My Contraceptive Tracking</h2>
      <Calendar
        value={dateState}
        onChange={changeDate}
        tileClassName={tileClassName}
        // tileContent={tileContent}
      />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
    </>
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

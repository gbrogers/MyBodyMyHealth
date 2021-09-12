import axios from "axios";
import React, { useState, useContext, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styles from "./PeriodTracking.module.scss";
import { UserContext } from "../../UserContext";

export default function PeriodTracking() {
  const { user, setUser } = useContext(UserContext);
  const [datesToAddTo, setdatesToAddTo] = useState([]);
  const [periodPresent, setPeriodPresent] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const note = useRef();

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
  function isSameDay(a, b) {
    const d = new Date(a);
    // console.log(d.getMonth());
    // console.log(b.getMonth());
    const dateA = `${d.getMonth()}${d.getDate()}${d.getYear()}`;
    const dateB = `${b.getMonth()}${b.getDate()}${d.getYear()}`;
    console.log(dateA === dateB);
    return dateA === dateB;
  }

  async function updateRecords(e) {
    e.preventDefault();
    console.log(periodPresent);
    if (periodPresent) {
      console.log("period had");

      const requestBody = {
        id: user.id,
        dateState,
      };
      //will send notes in this request too.

      axios
        .post("/api/addPeriodDate", requestBody)
        .then((res) => {
          const dates = res.data;
          console.log(`RES.DATA: ${res.data}`);
          let dateArray = [];
          dates.map((instance) => {
            dateArray = [...datesToAddTo, instance.date_occurred];
          });
          setdatesToAddTo(dateArray);
        })
        .catch((error) => console.log(error));
      // console.log(datesToAddTo);
    } else {
      console.log("negative");
    }
  }

  return (
    <div className={`${styles.menstrualTracking} page-layout`}>
      {/* <h2>{`Hello, ${user.fname} - Welcome to My Menstruation Tracking`}</h2> */}
      <h2>{`Hello, Welcome to My Menstruation Tracking`}</h2>
      <section className="styles.calendar-section-container">
        <div className="styles.calendar-container">
          <Calendar
            value={dateState}
            onChange={changeDate}
            tileClassName={tileClassName}
          />
        </div>
        <p>
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p>
      </section>
      <aside>
        <div className={styles.period_checkin_container}>
          <form>
            <label className={styles.period_checkin}>
              <p>Did you menstruate today?</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPeriodPresent(true);
                }}
              >
                Yes
              </button>
              <button>No</button>
            </label>
            <label className={styles.notes}>
              <p>
                Enter any notes about today that you'd like to keep track of{" "}
              </p>
              <textarea placeholder="enter notes here" ref={note}></textarea>
            </label>
            <button onClick={updateRecords}>Save</button>
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

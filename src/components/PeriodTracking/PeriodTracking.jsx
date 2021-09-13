import axios from "axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styles from "./PeriodTracking.module.scss";
import { UserContext } from "../../UserContext";
import { withRouter } from "react-router-dom";

function PeriodTracking() {
  const { user, setUser } = useContext(UserContext);

  const [datesToAddTo, setdatesToAddTo] = useState([]);
  const [periodPresent, setPeriodPresent] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const note = useRef();

  // useEffect(() => {
  //   console.log("in effect");

  //   async function fetchRecords() {
  //     const requestBody = {
  //       id: user.id,
  //     };
  //     //will send notes in this request too.
  //     console.log(user.id);
  //     axios
  //       .get("/api/getPeriodDate", { id: user.id })
  //       .then((res) => {
  //         const dates = res.data;
  //         console.log(dates);
  //         let dateArray = [];
  //         dates.map((instance) => {
  //           dateArray = [...dateArray, instance.date_occurred];
  //           console.log(dateArray);
  //           // console.log(instance.date_occurred);
  //         });
  //         setdatesToAddTo(dateArray);
  //       })
  //       .catch((error) => console.log(error));
  //     // console.log(datesToAddTo);
  //   }

  //   fetchRecords();
  // }, []);

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

  //make fetch funtion to be called in useEffect
  async function updateRecords() {
    console.log(periodPresent);
    if (periodPresent) {
      setPeriodPresent(false);
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
          console.log(dates);
          let dateArray = [];
          dates.map((instance) => {
            dateArray = [...dateArray, instance.date_occurred];
            console.log(dateArray);
            console.log(instance.date_occurred);
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
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <section className="styles.calendar-section-container">
        <div className="styles.calendar-container">
          <Calendar
            value={dateState}
            onChange={changeDate}
            tileClassName={tileClassName}
          />
        </div>
        {/* <p>
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p> */}
      </section>
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
                    setPeriodPresent(true);
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
              <textarea placeholder="enter notes here" ref={note}></textarea>
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
export default withRouter(PeriodTracking);

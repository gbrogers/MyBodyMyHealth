import styles from "./PeriodTracking.module.scss";
import "react-calendar/dist/Calendar.css";

import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import moment from "moment";
import { withRouter } from "react-router-dom";

import IndividualNote from "../IndividualNote/IndividualNote";
import { UserContext } from "../../UserContext";

import Check from "../../images/checkmark.png";

function PeriodTracking() {
  const { user, setUser } = useContext(UserContext);

  const [datesToAddTo, setdatesToAddTo] = useState([]);
  const [periodPresent, setPeriodPresent] = useState(false);
  const [noteArray, setNoteArray] = useState([]);
  const [dateState, setDateState] = useState(new Date());
  const noteText = useRef();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const user_id = user.id;

    //fetch previously added dates on page render
    axios
      .get(`/api/getPeriodDates/${user_id}`)
      .then((res) => {
        const dates = res.data;
        let dateArray = [];
        dates.map((instance) => {
          dateArray = [...dateArray, instance.date_occurred];
        });
        setdatesToAddTo(dateArray);
      })
      .catch((error) => console.log(error));

    //fetch previously made notes on page render
    axios
      .get(`/api/getNotes/${user_id}`)
      .then((res) => {
        setNoteArray(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeDate = (e) => {
    setDateState(e);
  };

  function tileClassName({ date, view }) {
    // Check if a date React-Calendar wants to check is on the list of user dates to add class to
    if (datesToAddTo.find((dDate) => isSameDay(dDate, date))) {
      return "period"; //makes class name of specific tile "period"
    }
  }
  //compare calendar tile date with DB date
  function isSameDay(a, b) {
    const d = new Date(a);
    const dateA = `${d.getMonth()}${d.getDate()}${d.getYear()}`;
    const dateB = `${b.getMonth()}${b.getDate()}${b.getYear()}`;
    return dateA === dateB;
  }

  //add period date to DB
  async function updateRecords() {
    //update DB only when user says period was present
    if (periodPresent) {
      setPeriodPresent(false);

      const requestBody = {
        id: user.id,
        dateState,
      };

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
    } else {
      console.log("negative");
    }
  }
  // add user notes to DB
  async function updateNotes() {
    if (noteText.current.value.length > 1) {
      const noteRequestBody = {
        text: noteText.current.value,
        note_date: dateState,
        user_id: user.id,
      };
      noteText.current.value = "";
      axios
        .post("/api/addNotes", noteRequestBody)
        .then((res) => {
          // console.log(res.data);
          setNoteArray(res.data);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className={`${styles.menstrualTracking} page-layout`}>
      <div className={styles.headerContainer}>
        <h2
          className={styles.sectionHeader}
        >{`${user.fname}'s Menstruation Tracking`}</h2>
      </div>
      <div class={styles.calendar_notes_container}>
        <section className={styles.calendar_section_container}>
          <div className={`${styles.calendarContainer} "calendar-container"`}>
            <Calendar
              value={dateState}
              onChange={changeDate}
              tileClassName={tileClassName}
            />
            <div className={styles.periodCalendarLegend}>
              <div>
                <div className={styles.keyColor}></div>
                <h4>Period Present</h4>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.noteListContainer}>
          <h3>Notes from the last 7 days</h3>
          <ul className={styles.noteList}>
            {noteArray.map((note) => {
              //only show notes from the last 7 days
              const dateDiff =
                Math.abs(
                  new Date(note.note_date).getTime() - new Date().getTime()
                ) /
                (60 * 60 * 1000 * 24);
              if (dateDiff <= 7) {
                return <IndividualNote note={note} />;
              }
            })}
          </ul>
        </div>
      </div>

      <aside>
        <div className={styles.period_checkin_container}>
          <form>
            <div className={styles.checkinHeaderContainer}>
              <h4 className={styles.methodHeader}>Menstruation Check-in</h4>
              <img className={styles.check} src={Check} alt="check mark"></img>
            </div>
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

            <p>Enter any notes that you'd like to keep track of below. </p>
            <textarea placeholder="enter notes here" ref={noteText}></textarea>

            <button
              className={styles.saveBtn}
              onClick={(e) => {
                e.preventDefault();
                updateRecords();
                updateNotes();
                setIsDisabled(true);
              }}
              disabled={isDisabled}
            >
              Save
            </button>
          </form>
          <p class={styles.sideNote}>
            * Update previous days on the calendar by selecting the date and
            responding to the prompt for that particular day
          </p>
        </div>
      </aside>
    </div>
  );
}
export default withRouter(PeriodTracking);

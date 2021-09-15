import styles from "./IndividualNote.module.scss";
import moment from "moment";
import Notepad from "../../images/notepad.svg";

import react, { useState } from "react";
import axios from "axios";

export default function IndividualNote(props) {
  const { note } = props;
  const [isDeleted, setIsDeleted] = useState(false);

  //remove note for specific user
  function deleteNote() {
    const note_id = note.id;
    axios
      .delete(`/api/deleteNote/${note_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <li className={styles.singleNote}>
      <div className={styles.singleNoteContent}>
        <img
          src={Notepad}
          alt="notepad icon"
          className={styles.notepadImg}
        ></img>
        <div>
          <h4>{moment(note.note_date).format("MMMM Do YYYY")}</h4>
          <p>{note.text}</p>
        </div>
      </div>
      {isDeleted ? (
        <button className={styles.deleteBtn}>Deleted!</button>
      ) : (
        <button
          className={styles.deleteBtn}
          onClick={() => {
            deleteNote();
            setIsDeleted(true);
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
}

import styles from "./IndividualNote.module.scss";
import moment from "moment";
import Notepad from "../../images/notepad.svg";

import react from "react";

export default function IndividualNote(props) {
  const { note } = props;
  console.log("in individualnote component");
  return (
    <li className={styles.singleNote}>
      <img src={Notepad} alt="notepad icon" className={styles.notepadImg}></img>
      <div>
        <h4>{moment(note.note_date).format("MMMM Do YYYY")}</h4>
        <p>{note.text}</p>
      </div>
    </li>
  );
}

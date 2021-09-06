import styles from "./Footer.module.scss";
import Triangle from "../../images/home-triangle.svg";
export default function Footer() {
  return (
    <div className={styles.footer}>
      Footer
      <img src={Triangle}></img>
    </div>
  );
}

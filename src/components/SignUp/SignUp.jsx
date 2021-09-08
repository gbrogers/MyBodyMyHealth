import styles from "./SignUp.module.scss";

export default function SignUp() {
  return (
    <div className={`${styles.signup} page-layout`}>
      <form className={styles.signupForm}>
        <h2>Welcome!</h2>
        <h4>Sign Up to get started here.</h4>
        <label>
          First Name: <input type="text"></input>
        </label>
        <label>
          Last Name: <input type="text"></input>
        </label>
        <label>
          Email: <input type="text"></input>
        </label>
        <label>
          Password: <input type="text"></input>
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

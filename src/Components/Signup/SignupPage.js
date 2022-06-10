import React, { useState } from "react";
import Card from "../Card/Card";
import Header from "../Login/Header";
import Button from "../Button/Button";
import styles from "./Signup.module.css";

const SignupPage = () => {
  const [signupError, setSignupError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [emailError, setEmailError] = useState("");
  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(setEmail)) {
      if (setPassword.trim().length > +8) {
        return true;
      }
    }

    if (setPassword.length < +8) {
      alert("Password must have min 8 characters");
    } else {
      alert("You have entered an invalid email address!");
    }
    return false;
  }

  return (
    <React.Fragment>
      <Header />
      <Card>
        <form>
          <h1 className={styles.header}>Sign Up</h1>
          <br />
          <label className={styles.label} htmlFor="email">
            Email :
            <input
              className={styles.inputvalid}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
            />
          </label>
          <br />
          <br />
          <label className={styles.label} for="password">
            Password :
            <input
              className={styles.inputvalid}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
            />
            <br />
            <br />
          </label>
          <label className={styles.label} for="Confirmpassword">
            Confirm Password :
            <input
              className={styles.inputvalid}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmpassword"
              type="password"
            />
          </label>
          <br />
          <br />
          <Button type="submit" text="Submit" onChange={ValidateEmail} />
          {signupError && <p style={{ color: "red" }}>{signupError}</p>}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default SignupPage;

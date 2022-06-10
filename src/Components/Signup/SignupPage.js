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
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  //email checks
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  //password checks
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  //confirmpassword checks
  const [confirmpasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmpasswordTouched, setConfirmPasswordTouched] = useState(false);

  /*function ValidateEmail() {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(setEmail)) {
      if (password.trim().length > +8) {
        setPasswordValid(true);
      }
    }

    if (password.trim().length < +8) {
      alert("Password must have min 8 characters");
    } else {
      alert("You have entered an invalid email address!");
    }
    return false;
  }*/

  function emailCheckHandler() {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(email)) {
      setEmailValid(false);
      return;
    }
    // if (email.trim() === "" || !email.includes("@")) {
    //   setEmailValid(false);
    //   return;
    // }
    setEmailValid(true);
  }
  function passwordCheckHandler() {
    if (password.trim().length < +8) {
      setPasswordValid(false);
      return;
    }
    setPasswordValid(true);
  }
  function confirmPasswordCheckHandler() {
    if (confirmPassword.trim() < +8) {
      setConfirmPasswordValid(false);
    }
  }
  function submitHandler(event) {
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    event.preventDefault();
    emailCheckHandler();
    passwordCheckHandler();
    confirmPasswordCheckHandler();
  }
  const emailisInvalid = !emailValid && emailTouched;
  const passwordisInvalid = !passwordValid && passwordTouched;
  return (
    <React.Fragment>
      <Header />
      <Card>
        <form onSubmit={submitHandler}>
          <h1 className={styles.header}>Sign Up</h1>
          <br />
          <label className={styles.label} htmlFor="email">
            Email :
          </label>
          <input
            required
            className={emailisInvalid ? styles.invalid : styles.inputvalid}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
          />
          <br />
          {emailisInvalid && (
            <p className={styles.errortext}>
              You have entered an invalid email address
            </p>
          )}
          <br />
          <label className={styles.label} for="password">
            Password :
          </label>
          <input
            required
            className={passwordisInvalid ? styles.invalid : styles.inputvalid}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
          />
          <br />
          {passwordisInvalid && (
            <p className={styles.errortext}>
              Password must have min 8 characters
            </p>
          )}
          <br />
          <label className={styles.label} for="Confirmpassword">
            Confirm Password :
            <input
              required
              className={styles.inputvalid}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmpassword"
              type="password"
            />
          </label>
          <br />
          <br />
          <Button type="submit" text="Submit" />
          {signupError && <p style={{ color: "red" }}>{signupError}</p>}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default SignupPage;

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
  //email checks
  const [emailTouched, setEmailTouched] = useState(false);
  //password checks
  const [passwordTouched, setPasswordTouched] = useState(false);
  //confirmpassword checks
  const [confirmpasswordTouched, setConfirmPasswordTouched] = useState(false);

  const emailValid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase()
    );
  const passwordValid = password.length >= 8;
  const confirmPasswordValid = confirmPassword === password;
  //invalid checks state
  const emailisInvalid = !emailValid && emailTouched;
  const passwordisInvalid = !passwordValid && passwordTouched;
  const confirmpasswordInvalid =
    !confirmPasswordValid && confirmpasswordTouched;

  function emailBlurHandler() {
    setEmailTouched(true);
  }
  function emailCheckHandler() {
    if (!emailValid) {
      return;
    }
  }
  function passwordBlurHandler() {
    setConfirmPasswordTouched(true);
  }
  function confirmPasswordBlurHandler() {
    setPasswordTouched(true);
  }
  function passwordCheckHandler() {
    if (!passwordValid) {
      return;
    }
  }
  function confirmPasswordCheckHandler() {
    if (!confirmPasswordValid) {
      return;
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    emailCheckHandler();
    passwordCheckHandler();
    confirmPasswordCheckHandler();
  }
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
            onBlur={emailBlurHandler}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
          />
          <br />
          {emailisInvalid && (
            <p className={styles.errortext}>
              You Have entered an invalid email Address
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
            onBlur={passwordBlurHandler}
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
              onBlur={confirmPasswordBlurHandler}
              name="confirmpassword"
              type="password"
            />
          </label>
          <br />
          {confirmpasswordInvalid && (
            <p className={styles.errortext}>Passwords do not match.!</p>
          )}
          <br />
          <Button type="submit" text="Submit" />
          {signupError && <p style={{ color: "red" }}>{signupError}</p>}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default SignupPage;

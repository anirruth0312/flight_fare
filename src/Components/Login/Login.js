import React, { useState } from "react";
import Card from "../Card/Card";
import Signup from "./Signup";
import Header from "./Header";
import Time from "../Time/Time";
import Button from "../Button/Button";
import styles from "./Login.module.css";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loginValid, setLoginValid] = useState(false);
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  //Email change and checking if its valid
  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setEmailValid(event.target.value.includes("@"));
    setLoginValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 8
    );
  }

  //Password change and checking if it is valid
  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    setPasswordValid(enteredPassword.trim().length > 8);
    setLoginValid(
      event.target.value.trim().length > 8 && enteredEmail.includes("@")
    );
  }

  //email valiadation
  function validateEmail(event) {
    setEnteredEmail(event.target.value);
  }
  //password validation
  function validatePassword(event) {
    setEnteredPassword(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  }
  return (
    <React.Fragment>
      <Card>
        <form onSubmit={submitHandler}>
          <h1 className={styles.header}>Welcome</h1>
          <label className={styles.label} htmlFor="email">
            Email :{" "}
          </label>
          <input
            className={emailValid ? styles.inputvalid : styles.inputerror}
            type="email"
            onChange={emailChangeHandler}
            onBlur={validateEmail}
          />
          <br />
          <br />
          <label className={styles.label} htmlFor="password">
            Password :{" "}
          </label>
          <input
            className={passwordValid ? styles.inputvalid : styles.inputerror}
            type="password"
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
          />
          <br />
          <br />
          <Button
            type="submit"
            text="Login"
            onClick={props.login}
            disabled={!loginValid}
          />
        </form>
        <Signup />
      </Card>
    </React.Fragment>
  );
}

export default Login;

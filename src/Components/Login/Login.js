import React, { useState } from "react";
import Card from "../Card/Card";
import Signup from "./Signup";
import Button from "../Button/Button";
import styles from "./Login.module.css";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loginValid, setLoginValid] = useState(false);

  //Email change and checking if its valid
  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setLoginValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 8
    );
  }

  //Password change and checking if it is valid
  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
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
    <Card>
      <form onSubmit={submitHandler}>
        <h1 className={styles.header}>Welcome</h1>
        <label className={styles.label} htmlFor="email">
          Email :{" "}
        </label>
        <input
          className={styles.inputbox}
          placeholder="Enter your email Id"
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
          className={styles.inputbox}
          placeholder="Enter your Password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePassword}
        />
        <br />
        <br />
        <Button type="submit" text="Login" disabled={!loginValid} />
      </form>
      <Signup />
    </Card>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Header from "./Header";
import Button from "../Button/Button";
import styles from "./Login.module.css";
function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loginValid, setLoginValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  //Password change and checking if it is valid
  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    setLoginValid(enteredEmail.includes("@") && event.target.value.length >= 8);
  }
  //email validation
  function emailBlurHandler() {
    setEmailIsTouched(true);
  }
  function enteredEmailCheckHandler() {
    if (!emailValid) {
      return;
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    enteredEmailCheckHandler();
    if (loginValid) {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_LOGINKEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          props.onLogin(enteredEmail, enteredPassword);
          setEnteredEmail("");
          setEmailIsTouched(false);
          setEnteredPassword("");
        } else {
          alert("Invalid username or password");
        }
        setEnteredEmail("");
        setEmailIsTouched(false);
        setEnteredPassword("");
      });
    }
  }
  const emailValid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      enteredEmail.toLowerCase()
    );
  const emailisInvalid = !emailValid && emailIsTouched;
  return (
    <React.Fragment>
      <Header />
      <Card>
        <form onSubmit={submitHandler}>
          <h1 className={styles.header}>Welcome</h1>
          <label className={styles.label} htmlFor="email">
            Email :
          </label>
          <input
            className={emailisInvalid ? styles.invalid : styles.inputvalid}
            type="email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
            onBlur={emailBlurHandler}
          />
          <br />
          {emailisInvalid && (
            <p className={styles.errortext}>
              Please Enter a valid email address
            </p>
          )}
          <br />
          <label className={styles.label} htmlFor="password">
            Password :
          </label>
          <input
            className={styles.inputvalid}
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            required
          />
          <br />
          <br />
          <Button type="submit" text="Login" onClick={props.login} />
        </form>
        <br />
        <Link to="/Signup">
          <b>Click here to Signup</b>
        </Link>
      </Card>
    </React.Fragment>
  );
}

export default Login;

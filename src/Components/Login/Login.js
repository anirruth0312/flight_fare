import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./Login.module.css";
function Login() {
  return (
    <Card>
      <h1 className={styles.header}>Welcome</h1>
      <label className={styles.label} htmlFor="email">
        Email :{" "}
      </label>
      <input
        className={styles.inputbox}
        placeholder="Enter your email Id"
        type="email"
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
      />
      <br />
      <br />
      <Button text="Login" />
    </Card>
  );
}

export default Login;

import React from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";

function FirstPage(props) {
  return (
    <header className={styles["main-header"]}>
      <h1>Website Name</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
}

export default FirstPage;

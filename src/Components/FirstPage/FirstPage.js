import React from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";

function FirstPage(props) {
  return (
    <header className={styles["main-header"]}>
      <Header />
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
}

export default FirstPage;

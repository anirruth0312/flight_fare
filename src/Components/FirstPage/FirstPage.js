import React from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";
import TravelForm from "./TravelForm";

function FirstPage(props) {
  //log used to render component when logged in
  const log = props.isAuthenticated;
  return (
    <React.Fragment>
      <header className={styles["main-header"]}>
        <Header />
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
      {log && <TravelForm />}
    </React.Fragment>
  );
}

export default FirstPage;

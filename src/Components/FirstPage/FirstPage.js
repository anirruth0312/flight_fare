import React from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";
import TravelForm from "./TravelForm";

function FirstPage(props) {
  //log used to render component when logged in
  const log = props.isAuthenticated;

  function receiveDataHandler(data) {
    const source = data.source;
    const destination = data.destination;
    const date = data.date;
  }

  return (
    <React.Fragment>
      <header className={styles["main-header"]}>
        <Header />
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
      {log && <TravelForm onReceiveData={receiveDataHandler} />}
    </React.Fragment>
  );
}

export default FirstPage;

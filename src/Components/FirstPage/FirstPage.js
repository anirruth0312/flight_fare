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
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7c840213c9mshfd6f771a202b0f2p10271bjsnbb5f04045ba0",
        "X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://flight-fare-search.p.rapidapi.com/v1/flight/search?from=BLR&to=BOM&date=${date}&currency=INR&type=Economy&adult=1&child=0&infant=0`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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

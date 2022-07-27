import React from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";
import TravelForm from "./TravelForm";
import Time from "../Time/Time";

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
      `https://flight-fare-search.p.rapidapi.com/v2/flight/?from=BLR&to=BOM&date=${date}&adult=1&type=economy&currency=INR`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        console.log(response.results);
        let depttime = response.results[0].departureAirport.time;
        let arrivaltime = response.results[0].arrivalAirport.time;
        let airline_name = response.results[0].flight_name;
        let flightcode = response.results[0].flight_code;
        let duration = response.results[0].duration.text;
        let price = response.results[0].totals.total;
      })
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

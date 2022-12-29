import React, { useState } from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";
import TravelForm from "./TravelForm";
import FlightCard from "./FlightCard";
import Loading from "./Loading";
import Error from "./Error";

function FirstPage(props) {
  const log = props.isAuthenticated;
  const [fCardData, setfCardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  function timeoutHandler() {
    setError(true);
    setLoading(false);
  }
  function receiveDataHandler(data) {
    const src = data.source;
    const dest = data.destination;
    const date = data.date;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cb9c9c9385msh713a23764b1a5d8p1a2543jsn7735f9772cf6",
        "X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
      },
    };
    setLoading(true);
    /*fetch(
      `https://flight-fare-search.p.rapidapi.com/v2/flight/?from=${src}&to=${dest}&date=${date}&adult=1&type=economy&currency=INR`,
      options
    )
      .then((response) => {
        setTimeout(timeoutHandler, 15000);
        if (response.ok) {
          response.Json();
        } else {
          setError(true);
          throw response;
        }
      })
      .then((response) => {
        console.log(response);
   */
    fetch(
      `https://flight-fare-search.p.rapidapi.com/v2/flight/?from=${src}&to=${dest}&date=${date}&adult=1&type=economy&curency=INR`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTimeout(timeoutHandler, 15000);
        if (response.status === 200) {
          const data = [];
          for (let i = 0; i < 8; i++) {
            let depttime = response.results[i].departureAirport.time;
            let departure_airport = response.results[i].departureAirport.code;
            let arrivaltime = response.results[i].arrivalAirport.time;
            let arrival_airport = response.results[i].arrivalAirport.code;
            let airline_name = response.results[i].flight_name;
            let flightcode = response.results[i].flight_code;
            let duration = response.results[i].duration.text;
            let price = response.results[i].totals.total;
            data.push({
              departure_airport: departure_airport,
              departure_time: depttime,
              arrival_airport: arrival_airport,
              arrival_time: arrivaltime,
              flight_name: airline_name,
              flight_code: flightcode,
              duration: duration,
              cost: price,
            });
          }
          setLoading(false);
          setfCardData(data);
        } else {
          console.log(response.status);
        }
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
      {loading && <Loading />}
      {!loading && error && <Error err={error} />}
      {fCardData &&
        fCardData.map((item, index) => (
          <FlightCard
            key={index}
            flight_name={item.flight_name}
            departure_time={item.departure_time.slice(11)}
            departure_airport={item.departure_airport}
            arrival_time={item.arrival_time.slice(11)}
            flight_code={item.flight_code}
            arrival_airport={item.arrival_airport}
            duration={item.duration}
            cost={item.cost.toFixed(2)}
          />
        ))}
    </React.Fragment>
  );
}

export default FirstPage;

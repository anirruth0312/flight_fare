import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import styles from "./FirstPage.module.css";
import Header from "../Login/Header";
import TravelForm from "./TravelForm";
import FlightCard from "./FlightCard";

function FirstPage(props) {
  const flight_card_final = [];
  const log = props.isAuthenticated;
  const [f, setf] = useState([]);
  const [fCardData, setfCardData] = useState(null);
  function receiveDataHandler(data) {
    const source = data.source;
    const destination = data.destination;
    const date = data.date;
    console.log("this ", data);
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
        // console.log(response);
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
        setfCardData(data);
        // f.forEach((item) => {
        //   const fc = (
        //     <FlightCard
        //       flight_name={item.flight_name}
        //       departure_time={item.departure_time}
        //       departure_airport={item.departure_airport}
        //       arrival_time={item.arrival_time}
        //       flight_code={item.flight_code}
        //       arrival_airport={item.arrival_airport}
        //       duration={item.duration}
        //       cost={item.cost}
        //     />
        //   );
        // flight_card_final.push(fc);
        // });
        // console.log(flight_card_final);
        // console.log("HERE ARE THE DETAILS", f);
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
      {/* {log && flight_card_final[0]} */}
      {fCardData &&
        fCardData.map((item, index) => (
          <FlightCard
            key={index}
            flight_name={item.flight_name}
            departure_time={item.departure_time}
            departure_airport={item.departure_airport}
            arrival_time={item.arrival_time}
            flight_code={item.flight_code}
            arrival_airport={item.arrival_airport}
            duration={item.duration}
            cost={item.cost}
          />
        ))}
    </React.Fragment>
  );
}

export default FirstPage;

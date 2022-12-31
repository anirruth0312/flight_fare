import React, { useState } from "react";
import TravelCard from "./TravelCard";
import Button from "../Button/Button";
import styles from "./TravelForm.module.css";
import Logo from "./Logo";
function TravelForm(props) {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  var curr = new Date();
  curr.setDate(curr.getDate());
  var curdate = curr.toISOString().substring(0, 10).toString();
  const [date, setDate] = useState(curdate);
  function sourceChangeHandler(event) {
    setSource(event.target.value);
  }
  function destinationChangeHandler(event) {
    setDestination(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function citySubmitHandler(event) {
    event.preventDefault();
    const data = {
      source,
      destination,
      date,
    };
    props.onReceiveData(data);
  }

  return (
    <div className={styles.box}>
      <TravelCard>
        <form>
          <h1 className={styles.head}>Search Flights </h1>
          <label className={styles.label} htmlFor="Departure_city">
            From :
          </label>
          <input
            className={styles.input}
            placeholder="Source airport code"
            type="text"
            required
            onChange={sourceChangeHandler}
          />
          <br />
          <br />
          <label className={styles.label} htmlFor="Arrival_city">
            To :
          </label>
          <input
            placeholder="Destination airport code"
            className={styles.input}
            type="text"
            required
            onChange={destinationChangeHandler}
          />
          <br />
          <br />
          <label className={styles.label} htmlFor="dept_date">
            Date :
          </label>
          <input
            className={styles.input}
            type="date"
            required
            onChange={dateChangeHandler}
          />
          <br />
          <br />
          <Button type="submit" text="Submit" onClick={citySubmitHandler} />
        </form>
      </TravelCard>
      <Logo />
    </div>
  );
}

export default TravelForm;

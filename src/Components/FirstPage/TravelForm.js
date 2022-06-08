import React from "react";
import TravelCard from "./TravelCard";
import Button from "../Button/Button";
import styles from "./TravelForm.module.css";
import Logo from "./Logo";
function TravelForm() {
  return (
    <div className={styles.box}>
      <TravelCard>
        <form>
          <h1 className={styles.head}>Book Flights ..!</h1>
          <label className={styles.label} htmlFor="Departure_city">
            From :{" "}
          </label>
          <input className={styles.input} type="text" required />
          <br />
          <br />
          <label className={styles.label} htmlFor="Arrival_city">
            To :{" "}
          </label>
          <input className={styles.input} type="text" required />
          <br />
          <br />
          <label className={styles.label} htmlFor="dept_date">
            Departure Date :{" "}
          </label>
          <input className={styles.input} type="date" required />
          <br />
          <br />
          <Button type="submit" text="Submit" />
        </form>
      </TravelCard>
      <Logo />
    </div>
  );
}

export default TravelForm;

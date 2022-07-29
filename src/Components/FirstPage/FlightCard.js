import styles from "./FlightCard.module.css";
function FlightCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <h3>{props.flight_details.flight_name}</h3>
        <h5 style={{ color: "gray" }}>{props.flight_details.flight_code}</h5>
      </div>
      <div className={styles.two}>
        <h1>{props.flight_details.departure_time}</h1>
        <p>{props.flight_details.departure_airport}</p>
      </div>
      <div className={styles.three}>
        <h5 style={{ color: "gray" }}>{props.flight_details.duration}</h5>
        <h4 style={{ color: "rgb(81,226,194)" }}>-----------------------</h4>
        <h5 style={{ fontWeight: "lighter", color: "gray" }}>Non stop</h5>
      </div>
      <div className={styles.four}>
        <h1>{props.flight_details.arrival_time}</h1>
        <p>{props.flight_details.arrival_airport}</p>
      </div>
      <div className={styles.five}>
        <h1 style={{ color: "#333333" }}>
          &#8377; {props.flight_details.cost}/-
        </h1>
        <button className={styles.btn}>Book Now</button>
      </div>
    </div>
  );
}

export default FlightCard;

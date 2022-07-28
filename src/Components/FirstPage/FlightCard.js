import styles from "./FlightCard.module.css";
function FlightCard() {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <h3>Flight name</h3>
        <h5 style={{ color: "gray" }}>Flight number</h5>
      </div>
      <div className={styles.two}>
        <h1>14:00</h1>
        <p>Bangalore</p>
      </div>
      <div className={styles.three}>
        <h5 style={{ color: "gray" }}>1h 35 min</h5>
        <h4 style={{ color: "rgb(81,226,194)" }}>-----------------------</h4>
        <h5 style={{ fontWeight: "lighter", color: "gray" }}>Non stop</h5>
      </div>
      <div className={styles.four}>
        <h1>15:35</h1>
        <p>Mumbai</p>
      </div>
      <div className={styles.five}>
        <h1 style={{ color: "#333333" }}>&#8377; 5899/-</h1>
        <button className={styles.btn}>Book Now</button>
      </div>
    </div>
  );
}

export default FlightCard;

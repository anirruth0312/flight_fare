import React from "react";
import styles from "./TravelCard.module.css";
function TravelCard(props) {
  return <div className={styles.travelcard}>{props.children}</div>;
}

export default TravelCard;

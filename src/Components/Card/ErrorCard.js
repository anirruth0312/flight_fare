import React from "react";
import styles from "./ErrorCard.module.css";
function ErrorCard(props) {
  return <div className={styles.errcard}>{props.children}</div>;
}

export default ErrorCard;

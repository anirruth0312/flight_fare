import React from "react";
import Time from "../Time/Time";
import styles from "./Header.module.css";
function Header() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Time />
        <h1 className={styles.title}>Title of the website</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;

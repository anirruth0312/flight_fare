import React from "react";
import styles from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;

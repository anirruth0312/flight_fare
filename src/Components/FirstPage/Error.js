import styles from "./Error.module.css";
import ErrorCard from "../Card/ErrorCard";
function Error(props) {
  function returnhandler() {
    window.location.reload();
  }
  return (
    <ErrorCard>
      <h3>{props.message}</h3>
      <button className={styles.exitbtn} onClick={returnhandler}>
        Return
      </button>
    </ErrorCard>
  );
}

export default Error;

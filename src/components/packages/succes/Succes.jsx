import { useEffect, useState } from "react";
import Button from "../../global/Button";
import styles from "./succes.module.scss";
import { useNavigate } from "react-router-dom";

const TIME_BEFORE_CLOSE = 10;
const INTERVAL_TIME = 1000;

function Succes() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(TIME_BEFORE_CLOSE);

  useEffect(() => {
    const interval = setInterval(
      () => setTimer((time) => time - 1),
      INTERVAL_TIME
    );
    if (!timer) navigate("/");

    return () => clearInterval(interval);
  }, [timer, navigate]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>We have confirmed your order!</h2>
      <p className={styles.subheading}>
        You can check and edit it at any time by clicking on the orders menu.
      </p>
      <div className={styles.return}>
        <p className={styles.text}>You will be returned to the homepage at: </p>
        <span className={styles.number}>{timer}</span>
      </div>
      <Button size="md" colorOnFocus="yellow" isLink={true} goTo="/">
        Homepage
      </Button>
    </div>
  );
}

export default Succes;

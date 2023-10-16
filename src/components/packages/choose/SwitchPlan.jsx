import { useState } from "react";
import styles from "./switchPlan.module.scss";
import { useCart } from "../../../context/CartContext";

function SwitchPlan({ marginBottom = 0, onDeActive, onActive }) {
  const [activePlan, setActivePlan] = useState(1);

  return (
    <div
      style={{ marginBottom: `${marginBottom}rem` }}
      className={styles.container}
    >
      <button
        className={`${styles.box} ${styles.box__1} ${
          activePlan === 1 ? styles.active : ""
        }`}
        onClick={() => {
          setActivePlan(1);
          onDeActive();
        }}
      >
        <span className={styles.name}>Standard</span>
        <span className={styles.price}>$79.99</span>
      </button>
      <button
        className={`${styles.box} ${activePlan === 2 ? styles.active : ""}`}
        onClick={() => {
          setActivePlan(2);
          onActive();
        }}
      >
        <span className={styles.name}>Enlarged</span>
        <div className={styles.discount}>
          <span className={styles.price}>$143.99</span>
          <span className={styles.price__raw}>$159.99</span>
        </div>
      </button>
      <div
        style={{ transform: `translateX(${activePlan === 2 ? "100" : "0"}%)` }}
        className={styles.background}
      />
    </div>
  );
}

export default SwitchPlan;
import { useState } from "react";
import styles from "./switchPlan.module.scss";

function SwitchPlan({ marginBottom = 0 }) {
  const [activePlan, setActivePlan] = useState(1);

  return (
    <div
      style={{ marginBottom: `${marginBottom}rem` }}
      className={styles.container}
    >
      <button
        className={`${styles.box} ${activePlan === 1 ? styles.active : ""}`}
        onClick={() => setActivePlan(1)}
      >
        <span className={styles.name}>Standard</span>
        <span className={styles.price}>$79.99</span>
      </button>
      <button
        className={`${styles.box} ${activePlan === 2 ? styles.active : ""}`}
        onClick={() => setActivePlan(2)}
      >
        <span className={styles.name}>Enlarged</span>
        <div className={styles.discount}>
          <span className={styles.price}>$143.99</span>
          <span className={styles.price__raw}>$159.99</span>
        </div>
      </button>
    </div>
  );
}

export default SwitchPlan;

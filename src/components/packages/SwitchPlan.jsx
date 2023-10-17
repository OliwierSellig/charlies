import styles from "./switchPlan.module.scss";

function SwitchPlan({
  marginBottom = 0,
  onDeActive,
  normalPrice,
  enlargedPrice,
  enlargedPriceRaw,
  onActive,
  switched = false,
}) {
  return (
    <div
      style={{ marginBottom: `${marginBottom}rem` }}
      className={styles.container}
    >
      <button
        className={`${styles.box} ${styles.box__1} ${
          !switched ? styles.active : ""
        }`}
        onClick={onDeActive}
      >
        <span className={styles.name}>Standard</span>
        <span className={styles.price}>${normalPrice}</span>
      </button>
      <button
        className={`${styles.box} ${switched ? styles.active : ""}`}
        onClick={onActive}
      >
        <span className={styles.name}>Enlarged</span>
        <div className={styles.discount}>
          <span className={styles.price}>${enlargedPrice}</span>
          <span className={styles.price__raw}>${enlargedPriceRaw}</span>
        </div>
      </button>
      <div
        style={{ transform: `translateX(${switched ? "100" : "0"}%)` }}
        className={styles.background}
      />
    </div>
  );
}

export default SwitchPlan;

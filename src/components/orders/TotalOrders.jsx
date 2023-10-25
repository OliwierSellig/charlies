import styles from "./totalOrders.module.scss";

function TotalOrders() {
  return (
    <div className={styles.container}>
      <p className={styles.row}>
        <span className={styles.text}>Total Orders:</span>
        <span className={styles.number}>5</span>
      </p>
      <p className={styles.row}>
        <span className={styles.text}>Earliest Delivery:</span>
        <span className={styles.date}>26.10.2023</span>
      </p>
    </div>
  );
}

export default TotalOrders;

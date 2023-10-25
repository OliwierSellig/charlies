import styles from "./fullPrice.module.scss";

function FullPrice() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.text}>Main:</span>
        <span className={styles.number}>$79.99</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Additions:</span>
        <span className={styles.number}>$24.99</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Delivery:</span>
        <span className={styles.number}>$0.00</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Discount:</span>
        <span className={styles.number}>20%</span>
      </li>
    </ul>
  );
}

export default FullPrice;

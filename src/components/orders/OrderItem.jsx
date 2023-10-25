import styles from "./orderItem.module.scss";

function OrderItem() {
  return (
    <li>
      <div className={styles.item}>
        <h4 className={styles.name}>Custom Package #1634</h4>
        <div className={styles.box}>
          <div className={styles.delivery}>
            <span className={styles.date}>25.10.2023</span>
            <span>-</span>
            <span className={styles.type}>Recurring</span>
          </div>
          <span className={styles.price}>$129.99</span>
        </div>
        <div className={styles.options}>
          <button className={styles.btn}>Check Details</button>
        </div>
      </div>
    </li>
  );
}

export default OrderItem;

import styles from "./orderItem.module.scss";

function OrderItem() {
  return (
    <li className={styles.item}>
      <button className={styles.container}>
        <div className={styles.box}>
          <h4 className={styles.name}>Custom Package #1634</h4>
          <div className={styles.delivery}>
            <span className={styles.date}>25.10.2023</span>
            <span>-</span>
            <span className={styles.type}>Recurring</span>
          </div>
        </div>
        <span className={styles.price}>$129.99</span>
      </button>
    </li>
  );
}

export default OrderItem;

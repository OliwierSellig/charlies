import styles from "./orderDetailsSummary.module.scss";

function OrderDetailsSummary() {
  return (
    <div className={styles.container}>
      <div className={styles.plan}>
        <span className={styles.number}>3/5</span>
        <span className={styles.text}>
          Creating a <span className={styles.size}>standard</span> package
        </span>
      </div>
      <div className={styles.price}>
        <span className={styles.partial}>$79.99 + $14.98</span>
        <span className={styles.full}>$94.97</span>
      </div>
    </div>
  );
}

export default OrderDetailsSummary;

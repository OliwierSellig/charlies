import Button from "../global/Button";
import styles from "./order.module.scss";

function Order() {
  return (
    <section className={styles.container}>
      <div className={`${styles.spacer} ${styles.spacer__down}`} />
      <div className={`${styles.spacer} ${styles.spacer__up}`} />
      <div className={styles.order}>
        <h2 className={styles.heading}>
          Highest quality chocolate with comfort delivery
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.check}>✔</span>
            <p className={styles.text}>
              <span className={styles.highlight}>
                Certified highest-quality cocoa
              </span>
              &nbsp;from non-GMO farms
            </p>
          </li>
          <li className={styles.item}>
            <span className={styles.check}>✔</span>
            <p className={styles.text}>
              From <span className={styles.highlight}>local farmers</span> with
              long family traditions
            </p>
          </li>
          <li className={styles.item}>
            <span className={styles.check}>✔</span>
            <p className={styles.text}>
              Delivery{" "}
              <span className={styles.highlight}>straight to your door</span>
              &nbsp;every week
            </p>
          </li>
        </ul>
        <Button isLink={true} size="md" colorOnFocus="yellow" isFilled={false}>
          Choose a treat
        </Button>
      </div>
    </section>
  );
}

export default Order;

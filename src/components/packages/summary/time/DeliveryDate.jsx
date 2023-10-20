import OtherDate from "./OtherDate";
import styles from "./deliveryDate.module.scss";

function DeliveryDate() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>
          You'll get you package on{" "}
          <span className={styles.date}>Friday, 20.10</span>
        </p>
        <span className={styles.info}>In 2 days</span>
      </div>
      <OtherDate />
    </div>
  );
}

export default DeliveryDate;

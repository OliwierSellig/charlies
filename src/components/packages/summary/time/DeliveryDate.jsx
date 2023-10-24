import { useSummary } from "../../../../context/SummaryContext";
import OtherDate from "./OtherDate";
import styles from "./deliveryDate.module.scss";
import {
  numberToDoubleDigit,
  getMonthName,
} from "../../../../services/helpers";

function DeliveryDate() {
  const { deliveryDate, awaitTime } = useSummary();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>
          You'll get you package on{" "}
          <span className={styles.date}>
            {getMonthName(deliveryDate.month())},{" "}
            {numberToDoubleDigit(deliveryDate.date())}.
            {numberToDoubleDigit(deliveryDate.month() + 1)}
          </span>
        </p>
        <span className={styles.info}>In {awaitTime} days</span>
      </div>
      <OtherDate />
    </div>
  );
}

export default DeliveryDate;

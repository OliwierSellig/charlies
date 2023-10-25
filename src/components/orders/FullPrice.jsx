import { useSummary } from "../../context/SummaryContext";
import styles from "./fullPrice.module.scss";

function FullPrice({ order }) {
  const { discountToPercentage } = useSummary();

  const { mainPrice, additionsPrice, deliveryCost, discount } = order.prices;

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.text}>Main:</span>
        <span className={styles.number}>${mainPrice || "00.00"}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Additions:</span>
        <span className={styles.number}>${additionsPrice || "0.00"}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Delivery:</span>
        <span className={styles.number}>${deliveryCost || "0.00"}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Discount:</span>
        <span className={styles.number}>
          {discount ? discountToPercentage(discount) : "0%"}
        </span>
      </li>
    </ul>
  );
}

export default FullPrice;

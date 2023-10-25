import { firstLetterUpperCase, formatDate } from "../../services/helpers";
import OpenSingleOrder from "./OpenSingleOrder";
import styles from "./orderItem.module.scss";

function OrderItem({ order }) {
  const {
    id,
    date,
    cover,
    deliveryType,
    prices: { fullPrice },
  } = order;

  return (
    <li>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.9),rgba(34, 34, 34, 0.9)),url("${cover}")`,
        }}
        className={styles.item}
      >
        <h4 className={styles.name}>Package #{id || "0000"}</h4>
        <div className={styles.box}>
          <div className={styles.delivery}>
            <span className={styles.date}>{formatDate(date)}</span>
            <span>-</span>
            <span className={styles.type}>
              {firstLetterUpperCase(deliveryType)}
            </span>
          </div>
          <span className={styles.price}>${fullPrice}</span>
        </div>
        <div className={styles.options}>
          <OpenSingleOrder order={order} />
        </div>
      </div>
    </li>
  );
}

export default OrderItem;

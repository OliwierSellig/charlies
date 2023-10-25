import { useState } from "react";
import styles from "./singleOrderHeader.module.scss";
import FullPrice from "./FullPrice";
import { firstLetterUpperCase, formatDate } from "../../services/helpers";

function SingleOrderHeader({ order }) {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const {
    id,
    date,
    deliveryType,
    cover,
    prices: { fullPrice },
  } = order;

  return (
    <header className={styles.header}>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(34, 34, 34, 1) 0%,rgba(34, 34, 34, 0.7) 100%),url("${cover}")`,
        }}
        className={styles.background}
      >
        <h3 className={styles.heading}>Package #{id || "0000"}</h3>
        {isPriceOpen && <FullPrice order={order} />}
      </div>
      <div className={styles.info}>
        <div className={styles.delivery}>
          <span className={styles.date}>{formatDate(date)}</span>
          <span className={styles.type}>
            {firstLetterUpperCase(deliveryType)}
          </span>
        </div>
        <button
          className={styles.price}
          onClick={() => setIsPriceOpen((open) => !open)}
        >
          ${fullPrice}
        </button>
      </div>
    </header>
  );
}

export default SingleOrderHeader;

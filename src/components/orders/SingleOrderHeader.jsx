import { useState } from "react";
import styles from "./singleOrderHeader.module.scss";
import FullPrice from "./FullPrice";

function SingleOrderHeader() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <h3 className={styles.heading}>Custom Package #1634</h3>
        {isPriceOpen && <FullPrice />}
      </div>
      <div className={styles.info}>
        <div className={styles.delivery}>
          <span className={styles.date}>25.10.2023</span>
          <span className={styles.type}>Recurring</span>
        </div>
        <button
          className={styles.price}
          onClick={() => setIsPriceOpen((open) => !open)}
        >
          $129.99
        </button>
      </div>
    </header>
  );
}

export default SingleOrderHeader;

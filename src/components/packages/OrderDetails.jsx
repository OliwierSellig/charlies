import { useRef } from "react";
import OrderDetailsSummary from "./OrderDetailsSummary";
import OrderList from "./OrderList";
import SwitchPlan from "./choose/SwitchPlan";
import styles from "./orderDetails.module.scss";

function OrderDetails({ close }) {
  const backgroundRef = useRef();

  return (
    <div
      className={styles.background}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h3 className={styles.heading}>Your Package</h3>
          <button className={styles.close} onClick={close} />
        </header>
        <div className={styles.box}>
          <OrderList title="Main" amount={79.99} />
          <OrderList title="Additions" amount={14.98} />
          <div className={styles.more}>
            <p className={styles.text}>Hungry for more?</p>
            <SwitchPlan />
          </div>
        </div>
        <OrderDetailsSummary />
      </div>
    </div>
  );
}

export default OrderDetails;

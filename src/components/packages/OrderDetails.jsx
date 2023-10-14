import OrderDetailsSummary from "./OrderDetailsSummary";
import OrderList from "./OrderList";
import SwitchPlan from "./choose/SwitchPlan";
import styles from "./orderDetails.module.scss";

function OrderDetails({ onCloseModal }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>Your Package</h3>
        <button className={styles.close} onClick={onCloseModal} />
      </header>
      <div className={styles.box}>
        <div className={styles.lists}>
          <OrderList title="Main" amount={79.99} />
          <OrderList title="Additions" amount={14.98} />
        </div>
        <div className={styles.more}>
          <p className={styles.text}>Hungry for more?</p>
          <SwitchPlan />
        </div>
      </div>
      <OrderDetailsSummary />
    </div>
  );
}

export default OrderDetails;

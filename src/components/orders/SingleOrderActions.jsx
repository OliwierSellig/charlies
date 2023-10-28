import { useOrders } from "../../context/OrdersContext";
import styles from "./singleOrderActions.module.scss";

function SingleOrderActions({ setIsDeletingOrder, setIsChangingOrder, order }) {
  const { checkDeadline } = useOrders();

  console.log(checkDeadline(order));

  return (
    <>
      {!checkDeadline(order) && (
        <nav className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btn__delivery}`}
            onClick={() => setIsChangingOrder(true)}
          >
            Change Delivery Date
          </button>
          <button
            className={`${styles.btn} ${styles.btn__package}`}
            onClick={() => setIsDeletingOrder(true)}
          >
            Delete Package
          </button>
        </nav>
      )}
      {checkDeadline(order) && (
        <div className={styles.disabled}>
          <p className={styles.text}>
            Cannot modify an order with a delivery time of 3 days or less
          </p>
          <img
            className={styles.icon}
            src="/svg/locked-white.svg"
            alt="Disabled"
          />
        </div>
      )}
    </>
  );
}

export default SingleOrderActions;

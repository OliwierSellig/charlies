import styles from "./singleOrderActions.module.scss";

function SingleOrderActions({ setIsDeletingOrder, setIsChangingOrder }) {
  return (
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
  );
}

export default SingleOrderActions;

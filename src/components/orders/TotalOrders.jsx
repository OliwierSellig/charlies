import { useOrders } from "../../context/OrdersContext";
import { formatDate } from "../../services/helpers";
import styles from "./totalOrders.module.scss";

function TotalOrders() {
  const { orderList, sortByDate } = useOrders();

  const formatedDate = formatDate(sortByDate(orderList).at(0).date);

  return (
    <div className={styles.container}>
      <p className={styles.row}>
        <span className={styles.text}>Total Orders:</span>
        <span className={styles.number}>{orderList?.length || 0}</span>
      </p>
      <p className={styles.row}>
        <span className={styles.text}>Earliest Delivery:</span>
        <span className={styles.date}>{formatedDate}</span>
      </p>
    </div>
  );
}

export default TotalOrders;

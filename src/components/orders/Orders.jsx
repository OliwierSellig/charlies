import ModalListHeader from "../global/ModalListHeader";
import NoOrders from "./NoOrders";
import OrderItem from "./OrderItem";
import styles from "./orders.module.scss";

function Orders({ onCloseModal }) {
  const orderList = [];
  return (
    <div className={styles.container}>
      <ModalListHeader handleClose={onCloseModal}>Your Orders</ModalListHeader>
      {orderList.length > 0 && <NoOrders handleClick={onCloseModal} />}
      {orderList.length === 0 && (
        <ul className={styles.list}>
          {Array.from({ length: 7 }, (_, i) => (
            <OrderItem key={i} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;

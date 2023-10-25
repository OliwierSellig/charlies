import { useOrders } from "../../context/OrdersContext";
import ModalListHeader from "../global/ModalListHeader";
import NoOrders from "./NoOrders";
import OrderItem from "./OrderItem";
import TotalOrders from "./TotalOrders";
import styles from "./orders.module.scss";

function Orders({ onCloseModal }) {
  const { orderList } = useOrders();
  console.log(orderList);
  return (
    <>
      <div className={styles.container}>
        <ModalListHeader handleClose={onCloseModal}>
          Your Orders
        </ModalListHeader>
        {orderList.length === 0 && <NoOrders handleClick={onCloseModal} />}
        {orderList.length > 0 && (
          <ul className={styles.list}>
            {orderList.map((order, i) => (
              <OrderItem key={i} order={order} />
            ))}
          </ul>
        )}
        <TotalOrders />
      </div>
    </>
  );
}

export default Orders;

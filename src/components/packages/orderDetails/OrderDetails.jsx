import { useCart } from "../../../context/CartContext";
import OrderDetailsSummary from "./OrderDetailsSummary";
import OrderList from "./OrderList";
import styles from "./orderDetails.module.scss";

function OrderDetails({ onCloseModal }) {
  const { mainPrice, getAdditionPrice, main, additions } = useCart();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>Your Package</h3>
        <button className={styles.close} onClick={onCloseModal} />
      </header>
      <div className={styles.box}>
        <div className={styles.lists}>
          <OrderList title="Main" amount={mainPrice} list={main} />
          <OrderList
            title="Additions"
            amount={getAdditionPrice()}
            list={additions}
          />
        </div>
      </div>
      <OrderDetailsSummary />
    </div>
  );
}

export default OrderDetails;

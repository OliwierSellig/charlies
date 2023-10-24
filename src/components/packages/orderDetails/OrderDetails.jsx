import { useCart } from "../../../context/CartContext";
import ModalListHeader from "../../global/ModalListHeader";
import OrderDetailsSummary from "./OrderDetailsSummary";
import OrderList from "./OrderList";
import styles from "./orderDetails.module.scss";

function OrderDetails({ onCloseModal }) {
  const { mainPrice, getAdditionPrice, main, additions } = useCart();

  return (
    <div className={styles.container}>
      <ModalListHeader handleClose={onCloseModal}>Your Package</ModalListHeader>
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

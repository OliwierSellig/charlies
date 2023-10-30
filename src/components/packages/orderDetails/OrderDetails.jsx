import { useCart } from "../../../context/CartContext";
import OrderList from "./../../global/OrderList";
import ModalListHeader from "../../global/ModalListHeader";
import OrderDetailsSummary from "./OrderDetailsSummary";
import styles from "./orderDetails.module.scss";

function OrderDetails({ onCloseModal }) {
  const {
    mainPrice,
    getAdditionPrice,
    main,
    additions,
    getSingleAmountMain,
    getSingleAmountAdditions,
  } = useCart();

  return (
    <div className={styles.container}>
      <ModalListHeader handleClose={onCloseModal}>Your Package</ModalListHeader>
      <div className={styles.box}>
        <OrderList
          title="Main"
          amount={mainPrice}
          list={main}
          singleAmount={getSingleAmountMain}
        />
        <OrderList
          title="Additions"
          amount={getAdditionPrice()}
          list={additions}
          singleAmount={getSingleAmountAdditions}
        />
      </div>
      <OrderDetailsSummary />
    </div>
  );
}

export default OrderDetails;

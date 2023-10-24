import { useCart } from "../../../context/CartContext";
import styles from "./orderDetailsSummary.module.scss";

function OrderDetailsSummary() {
  const {
    cartMax,
    getMainAmount,
    isEnlarged,
    mainPrice,
    getAdditionPrice,
    getFullPrice,
    deliveryCost,
  } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.plan}>
        <span className={styles.number}>
          {getMainAmount()}/{cartMax}
        </span>
        <span className={styles.text}>
          Creating a{" "}
          <span className={styles.size}>
            {isEnlarged ? "enlarged" : "standard"}
          </span>{" "}
          package
        </span>
      </div>
      <div className={styles.price}>
        <span className={styles.partial}>
          ${mainPrice} + ${getAdditionPrice()} + ${deliveryCost}
        </span>
        <span className={styles.full}>${getFullPrice()}</span>
      </div>
    </div>
  );
}

export default OrderDetailsSummary;

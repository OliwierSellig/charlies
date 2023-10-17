import { useCart } from "../../../context/CartContext";
import styles from "./orderList.module.scss";

function OrderList({ title, amount, list }) {
  const { getSingleAmountMain, getSingleAmountAdditions } = useCart();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.heading}>{title}</h4>
        <span className={styles.price}>${amount}</span>
      </header>
      {!list.length && (
        <div className={styles.empty}>
          <p className={styles.text}>Empty Cart</p>
          <img
            className={styles.icon}
            src="/svg/empty-cart-white.svg"
            alt="Empty Cart"
          />
        </div>
      )}
      {list.length > 0 && (
        <ul className={styles.list}>
          {list?.map((product, i) => (
            <li className={styles.item} key={i}>
              <img
                className={styles.img}
                src={product.image}
                alt={product.name}
              />
              <span className={styles.name}>{product.name}</span>
              <span className={styles.quantity}>
                {product.type === "cake" ? 1 : 2}x {product.quantity}g
              </span>
              <span className={styles.bought}>
                Cart:&nbsp;
                {getSingleAmountMain(product) ||
                  getSingleAmountAdditions(product)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderList;

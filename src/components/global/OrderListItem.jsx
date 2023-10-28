import styles from "./orderListItem.module.scss";

function OrderListItem({ product, singleAmount }) {
  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={product?.image || "/img/test.webp"}
        alt={product?.name || "Test Product"}
      />
      <span className={styles.name}>{product?.name || "Dark Chocolate"}</span>
      <span className={styles.quantity}>
        {product?.type === "cake" ? 1 : 2}x {product?.quantity || 120}g
      </span>
      <span className={styles.bought}>
        Cart:&nbsp;
        {singleAmount?.(product)}
      </span>
    </li>
  );
}

export default OrderListItem;

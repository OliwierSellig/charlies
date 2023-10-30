import styles from "./orderListItem.module.scss";

function OrderListItem({ product, singleAmount }) {
  return (
    <li className={styles.item}>
      <img className={styles.img} src={product?.image} alt={product?.name} />
      <span className={styles.name}>{product?.name}</span>
      <span className={styles.quantity}>
        {product?.type === "cake" ? 1 : 2}x {product?.quantity}g
      </span>
      <span className={styles.bought}>
        Cart:&nbsp;
        {singleAmount?.(product)}
      </span>
    </li>
  );
}

export default OrderListItem;

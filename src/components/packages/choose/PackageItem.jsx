import styles from "./packageItem.module.scss";

function PackageItem({ product, enlarged }) {
  const quantity = (enlarged ? 2 : 1) * (product.type === "cake" ? 1 : 2);

  return (
    <li className={styles.item}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div className={styles.text}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.quantity}>
          {quantity} x {product.quantity}g
        </span>
      </div>
    </li>
  );
}

export default PackageItem;

import styles from "./packageItem.module.scss";

function PackageItem() {
  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src="/img/packages/test-item.jpg"
        alt="Chocolate"
      />
      <div className={styles.text}>
        <span className={styles.name}>Dark Chocolate</span>
        <span className={styles.quantity}>2 x 120g</span>
      </div>
    </li>
  );
}

export default PackageItem;

import styles from "./orderList.module.scss";

function OrderList({ title, amount }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.heading}>{title}</h4>
        <span className={styles.price}>${amount}</span>
      </header>
      <ul className={styles.list}>
        {Array.from({ length: 4 }, (_, i) => (
          <li className={styles.item} key={i}>
            <img
              className={styles.img}
              src="/img/packages/test-item.jpg"
              alt="Chocolate"
            />
            <span className={styles.name}>Dark Chocolate</span>
            <span className={styles.quantity}>2x 120g</span>
            <span className={styles.bought}>Cart: 3</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;

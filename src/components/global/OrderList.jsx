import OrderListItem from "./OrderListItem";
import styles from "./orderList.module.scss";

function OrderList({ title, amount, list, singleAmount }) {
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
            <OrderListItem
              key={i}
              product={product}
              singleAmount={singleAmount}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderList;

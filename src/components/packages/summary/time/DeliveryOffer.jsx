import styles from "./deliveryOffer.module.scss";

function DeliveryOffer({ title, children, icon }) {
  return (
    <li>
      <button className={styles.container}>
        <div className={styles.box}>
          <h4 className={styles.heading}>{title}</h4>
          <p className={styles.description}>{children}</p>
        </div>
        <img
          className={styles.icon}
          src={icon}
          alt="Icon describing the option"
        />
      </button>
    </li>
  );
}

export default DeliveryOffer;

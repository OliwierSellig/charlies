import styles from "./noOrders.module.scss";
import Button from "../global/Button";

function NoOrders({ handleClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>You don't have any orthers yet</p>
        <img
          className={styles.icon}
          src="/svg/empty-cart-white.svg"
          alt="Empty Cart"
        />
      </div>
      <Button
        isLink={true}
        size="md"
        goTo="/packages"
        colorOnFocus="yellow"
        handleClick={handleClick}
      >
        Choose a treat
      </Button>
    </div>
  );
}

export default NoOrders;

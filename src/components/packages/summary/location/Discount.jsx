import styles from "./discount.module.scss";
import Button from "../../../global/Button";

function Discount() {
  return (
    <div className={styles.container}>
      <label className={styles.header} htmlFor="discount">
        <h3 className={styles.heading}>Got a discount?</h3>
        <img
          className={styles.icon}
          src="/svg/discount-white.svg"
          alt="Discount"
        />
      </label>
      <div className={styles.box}>
        <input
          id="discount"
          className={styles.input}
          type="text"
          placeholder="Write your discount code"
        />
        <Button colorOnFocus="yellow" size="sm">
          Activate
        </Button>
      </div>
    </div>
  );
}

export default Discount;

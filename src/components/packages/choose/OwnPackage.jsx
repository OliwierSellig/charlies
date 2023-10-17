import styles from "./ownPackage.module.scss";
import Button from "../../global/Button";
import { useCart } from "../../../context/CartContext";

function OwnPackage() {
  const { createCustomPackage, CUSTOM_PACKAGE_PRICE } = useCart();

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="/img/packages/package-own.webp"
        alt="Package"
      />
      <div className={styles.info}>
        <h3 className={styles.heading}>Create Your Package</h3>
        <div className={styles.box}>
          <p className={styles.sub}>
            Make a full package packed the with food you desire the most!
          </p>
          <p className={styles.sub}>
            We will deliver your treats fresh, straight from the bakery.
          </p>
        </div>
      </div>
      <div className={styles.cta}>
        <span className={styles.price}>${CUSTOM_PACKAGE_PRICE.normal}</span>
        <Button
          isLink={true}
          colorOnFocus="yellow"
          size="lg"
          goTo="create-package"
          handleClick={createCustomPackage}
        >
          See treats
        </Button>
      </div>
    </div>
  );
}

export default OwnPackage;

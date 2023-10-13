import styles from "./ownPackage.module.scss";
import Button from "../../global/Button";

function OwnPackage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="/img/packages/package-own.jpg"
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
        <span className={styles.price}>$97.99</span>
        <Button
          isLink={true}
          colorOnFocus="yellow"
          size="lg"
          goTo="create-package"
        >
          See treats
        </Button>
      </div>
    </div>
  );
}

export default OwnPackage;

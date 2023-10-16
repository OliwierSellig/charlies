import Button from "../global/Button";
import styles from "./noProductsFound.module.scss";

function NoProductsFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>No products have been found, sorry...</p>
      <img className={styles.icon} src="/svg/sad-white.svg" alt="Sad Face" />
      <Button isLink={true} colorOnFocus="yellow" goTo="/">
        Homepage
      </Button>
    </div>
  );
}

export default NoProductsFound;

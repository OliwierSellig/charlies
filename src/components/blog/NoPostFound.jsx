import Button from "../global/Button";
import styles from "./noPostFound.module.scss";

function NoPostFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        No post of this id have been found, sorry...
      </p>
      <img className={styles.icon} src="/svg/sad-white.svg" alt="Sad Face" />
      <Button isLink={true} colorOnFocus="yellow" size="lg" goTo="/blog">
        Go Back
      </Button>
    </div>
  );
}

export default NoPostFound;

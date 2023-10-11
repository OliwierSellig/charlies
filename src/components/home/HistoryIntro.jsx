import Button from "../global/Button";
import styles from "./historyIntro.module.scss";

function HistoryIntro() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>A decade of joy</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.year}>1907</span>
          <span className={styles.text}>
            Charlie&apos;s opens it&apos;s doors in Olympia
          </span>
        </li>
        <li className={styles.line} />
        <li className={styles.item}>
          <span className={styles.year}>1915</span>
          <span className={styles.text}>
            The shops expands it&apos;s products line
          </span>
        </li>
        <li className={styles.line} />
        <li className={styles.item}>
          <span className={styles.year}>1923</span>
          <span className={styles.text}>
            A great idea in time of prohibition
          </span>
        </li>
        <li className={styles.line} />
      </ul>
      <Button size="sm" isLink={true} colorOnFocus="white" goTo="/about">
        About us
      </Button>
    </div>
  );
}

export default HistoryIntro;

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
            Opening of the first chocolate shop
          </span>
        </li>
        <li className={styles.line} />
        <li className={styles.item}>
          <span className={styles.year}>1909</span>
          <span className={styles.text}>Moving back to Washington</span>
        </li>
        <li className={styles.line} />
        <li className={styles.item}>
          <span className={styles.year}>1912</span>
          <span className={styles.text}>
            The first ever expansion of the staff
          </span>
        </li>
        <li className={styles.line} />
      </ul>
      <Button size="sm" isLink={true} colorOnFocus="white">
        About us
      </Button>
    </div>
  );
}

export default HistoryIntro;

import styles from "./nutritionalTable.module.scss";

function NutritionalTable() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.box}>Nutritional Information</span>
        <span className={styles.box}>Amount per 100g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Energy</span>
        <span className={styles.box}>632 kcal</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Total Fat</span>
        <span className={styles.box}>14.7g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Saturated Fat</span>
        <span className={styles.box}>6.3g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Trans Fat</span>
        <span className={styles.box}>0g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Total Carbohydrate</span>
        <span className={styles.box}>43g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Sugars</span>
        <span className={styles.box}>31.3g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Protein</span>
        <span className={styles.box}>6.7g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Salt</span>
        <span className={styles.box}>0.9g</span>
      </li>
    </ul>
  );
}

export default NutritionalTable;

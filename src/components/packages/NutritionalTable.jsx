import styles from "./nutritionalTable.module.scss";

function NutritionalTable({ nutrition }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.box}>Nutritional Information</span>
        <span className={styles.box}>Amount per 100g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Energy</span>
        <span className={styles.box}>{nutrition?.energy} kcal</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Total Fat</span>
        <span className={styles.box}>{nutrition?.totalFat}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Saturated Fat</span>
        <span className={styles.box}>{nutrition?.saturatedFat}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Trans Fat</span>
        <span className={styles.box}>{nutrition?.transFat}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Total Carbohydrate</span>
        <span className={styles.box}>{nutrition?.carbs}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Sugars</span>
        <span className={styles.box}>{nutrition?.sugars}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Protein</span>
        <span className={styles.box}>{nutrition?.protein}g</span>
      </li>
      <li className={styles.item}>
        <span className={styles.box}>Salt</span>
        <span className={styles.box}>{nutrition?.salt}g</span>
      </li>
    </ul>
  );
}

export default NutritionalTable;

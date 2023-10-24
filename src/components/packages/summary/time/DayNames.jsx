import styles from "./dayNames.module.scss";

const dayNamesList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DayNames() {
  return (
    <ul className={styles.list}>
      {dayNamesList.map((day, i) => (
        <li key={i} className={styles.item}>
          {day}
        </li>
      ))}
    </ul>
  );
}

export default DayNames;

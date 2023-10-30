import { getDaysOfWeek } from "../../services/helpers";
import styles from "./dayNames.module.scss";

function DayNames() {
  return (
    <ul className={styles.list}>
      {getDaysOfWeek().map((day, i) => (
        <li key={i} className={styles.item}>
          {day}
        </li>
      ))}
    </ul>
  );
}

export default DayNames;

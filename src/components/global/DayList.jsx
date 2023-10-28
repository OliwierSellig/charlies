import dayjs from "dayjs";
import styles from "./dayList.module.scss";
import { checkIfAbleDate, generateMonthDays } from "../../services/helpers";

function DayList({
  iterator,
  handleClick,
  closeSelector,
  fastestDate,
  currentDate,
}) {
  const activeDate = dayjs()?.add(iterator, "month");

  const dayList = generateMonthDays(activeDate.month(), activeDate.year());

  function selectDate(day) {
    handleClick?.(day);
    closeSelector?.();
  }

  return (
    <ul className={styles.list}>
      {dayList.map((day, i) => (
        <li key={i} className={styles.item}>
          <button
            className={`${styles.btn} ${
              !checkIfAbleDate(activeDate, day, fastestDate)
                ? styles.disabled
                : ""
            } ${currentDate?.isSame(day, "day") ? styles.current : ""}`}
            disabled={!checkIfAbleDate(activeDate, day, fastestDate)}
            onClick={() => selectDate(day)}
          >
            {day.$D}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DayList;

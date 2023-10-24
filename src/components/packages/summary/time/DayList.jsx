import dayjs from "dayjs";
import { useSummary } from "../../../../context/SummaryContext";
import styles from "./dayList.module.scss";

function DayList({ iterator, onCloseModal }) {
  const {
    checkIfAbleDate,
    generateMonthDays,
    updateDeliveryDate,
    deliveryDate,
  } = useSummary();

  const activeDate = dayjs()?.add(iterator, "month");

  const dayList = generateMonthDays(activeDate.month(), activeDate.year());

  function selectDate(day) {
    onCloseModal();
    updateDeliveryDate(day);
  }

  return (
    <ul className={styles.list}>
      {dayList.map((day, i) => (
        <li key={i} className={styles.item}>
          <button
            className={`${styles.btn} ${
              !checkIfAbleDate(activeDate, day) ? styles.disabled : ""
            } ${deliveryDate.isSame(day, "day") ? styles.current : ""}`}
            disabled={!checkIfAbleDate(activeDate, day)}
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

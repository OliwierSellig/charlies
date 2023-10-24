import dayjs from "dayjs";
import { useSummary } from "../../../../context/SummaryContext";
import styles from "./dayList.module.scss";

function DayList({ iterator, onCloseModal }) {
  const { fastestDate, generateMonthDays, updateDeliveryDate, deliveryDate } =
    useSummary();

  const activeDate = dayjs()?.add(iterator, "month");

  const dayList = generateMonthDays(activeDate.month(), activeDate.year());

  function checkIfAble(day) {
    if (activeDate.month() !== day.$M) return false;
    if (!day.$W) return false;
    if (activeDate.month() === dayjs().month() && day.$D < fastestDate.date())
      return false;

    return true;
  }

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
              !checkIfAble(day) ? styles.disabled : ""
            } ${deliveryDate.isSame(day, "day") ? styles.current : ""}`}
            disabled={!checkIfAble(day)}
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

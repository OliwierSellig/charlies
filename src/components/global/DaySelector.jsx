import { useState } from "react";
import {
  checkIfMonthEmpty,
  generateMonthDays,
  getMonthName,
} from "../../services/helpers";
import dayjs from "dayjs";
import DayList from "./DayList";
import DayNames from "./DayNames";
import styles from "./daySelector.module.scss";

function DaySelector({ closeSelector, handleClick, fastestDate, currentDate }) {
  const [iterator, setIterator] = useState(0);

  const activeDate = dayjs()?.add(
    checkIfMonthEmpty(fastestDate) ? iterator + 1 : iterator,
    "month"
  );

  const dayList = generateMonthDays(
    activeDate.month(),
    activeDate.year(),
    true
  );

  function canGoNext() {
    return iterator < 3;
  }

  function canGoPrev() {
    return iterator;
  }

  function goPrev() {
    if (canGoPrev()) setIterator((i) => i - 1);
  }

  function goNext() {
    if (canGoNext()) setIterator((i) => i + 1);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.heading}>Choose a day that fits you best!</h3>
        <button
          className={styles.close}
          onClick={closeSelector}
          aria-label="Close selector"
        />
      </header>
      <nav className={styles.months}>
        <button
          className={`${styles.btn} ${styles.btn__prev} ${
            !canGoPrev() ? styles.btn__prev__disabled : ""
          }`}
          onClick={goPrev}
          disabled={!canGoPrev()}
          aria-label="See previous month"
        />
        <span className={styles.month}>{getMonthName(activeDate.month())}</span>
        <button
          className={`${styles.btn} ${styles.btn__next} ${
            !canGoNext() ? styles.btn__next__disabled : ""
          }`}
          onClick={goNext}
          disabled={!canGoNext()}
          aria-label="See next month"
        />
      </nav>
      <DayNames />
      <DayList
        iterator={iterator}
        handleClick={handleClick}
        closeSelector={closeSelector}
        fastestDate={fastestDate}
        currentDate={currentDate}
        dayList={dayList}
        activeDate={activeDate}
      />
    </div>
  );
}

export default DaySelector;

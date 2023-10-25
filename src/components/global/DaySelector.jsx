import DayList from "./DayList";
import DayNames from "./DayNames";
import styles from "./daySelector.module.scss";
import { getMonthName } from "../../services/helpers";
import { useState } from "react";
import dayjs from "dayjs";

function DaySelector({ closeSelector, handleClick, fastestDate, currentDate }) {
  const [iterator, setIterator] = useState(0);

  const currentMonth = dayjs()?.add(iterator, "month").month();

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
        <span className={styles.month}>{getMonthName(currentMonth)}</span>
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
      />
    </div>
  );
}

export default DaySelector;

import styles from "./questionBox.module.scss";

function QuestionBox({
  questionTitle = "",
  isActive,
  index,
  setActiveIndex,
  children,
}) {
  function toggleActive() {
    if (isActive) setActiveIndex(null);
    else setActiveIndex(index);
  }
  return (
    <li className={styles.container} onClick={toggleActive}>
      <header className={styles.header}>
        <h3
          className={`${styles.heading} ${
            isActive ? styles.heading__active : ""
          }`}
        >
          {questionTitle}
        </h3>
        <button
          className={`${styles.arrow} ${isActive ? styles.arrow__rotated : ""}`}
          aria-label={isActive ? "Close Answer" : "Open Answer"}
        />
      </header>
      <p className={`${styles.text} ${isActive ? styles.open : ""} `}>
        {children}
      </p>
    </li>
  );
}

export default QuestionBox;

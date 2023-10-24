import { useSummary } from "../../../context/SummaryContext";
import styles from "./summaryItemHeader.module.scss";

function SummaryItemHeader({ children, number }) {
  const { checkIfOpen, openItem } = useSummary();

  return (
    <header className={styles.container} onClick={() => openItem(number)}>
      <div className={styles.heading}>
        <div className={styles.number}>{number}</div>
        <h3 className={styles.title}>{children}</h3>
      </div>
      <button
        style={{
          transform: `rotate(${checkIfOpen(number) ? "-90deg" : "0deg"})`,
        }}
        className={styles.btn}
        aria-label="Open Box"
      />
    </header>
  );
}

export default SummaryItemHeader;

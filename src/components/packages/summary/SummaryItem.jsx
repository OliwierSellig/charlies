import { useSummary } from "../../../context/SummaryContext";
import SummaryItemHeader from "./SummaryItemHeader";
import styles from "./summaryItem.module.scss";

function SummaryItem({ children, title, number }) {
  const { checkIfOpen } = useSummary();

  return (
    <li className={styles.container}>
      <SummaryItemHeader number={number}>{title}</SummaryItemHeader>
      <div
        className={`${styles.item} ${checkIfOpen(number) ? "" : styles.closed}`}
      >
        <div className={styles.box}>{children}</div>
      </div>
    </li>
  );
}

export default SummaryItem;

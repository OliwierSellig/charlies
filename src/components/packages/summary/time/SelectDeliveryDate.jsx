import { useSummary } from "../../../../context/SummaryContext";
import DaySelector from "../../../global/DaySelector";
import styles from "./selectDeliveryDate.module.scss";

function SelectDeliveryDate({ onCloseModal }) {
  const { updateDeliveryDate, fastestDate, deliveryDate } = useSummary();

  return (
    <div className={styles.modal}>
      <DaySelector
        closeSelector={onCloseModal}
        handleClick={updateDeliveryDate}
        fastestDate={fastestDate}
        currentDate={deliveryDate}
      />
    </div>
  );
}

export default SelectDeliveryDate;

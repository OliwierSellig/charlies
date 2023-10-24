import PackageEditContainer from "../PackageEditContainer";
import DeliveryLocation from "./location/DeliveryLocation";
import DeliveryTime from "./time/DeliveryTime";
import Pricing from "./pricing/Pricing";
import SummaryItem from "./SummaryItem";
import styles from "./summary.module.scss";

function Summary() {
  return (
    <PackageEditContainer title="Summary">
      <ul className={styles.list}>
        <SummaryItem title="Delivery Time" number={1}>
          <DeliveryTime />
        </SummaryItem>
        <SummaryItem title="Delivery Location" number={2}>
          <DeliveryLocation />
        </SummaryItem>
        <SummaryItem title="Pricing" number={3}>
          <Pricing />
        </SummaryItem>
      </ul>
    </PackageEditContainer>
  );
}

export default Summary;

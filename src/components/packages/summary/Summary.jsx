import { useState } from "react";
import PackageEditContainer from "../PackageEditContainer";
import DeliveryLocation from "./location/DeliveryLocation";
import DeliveryTime from "./time/DeliveryTime";
import Pricing from "./pricing/Pricing";
import SummaryItem from "./SummaryItem";
import styles from "./summary.module.scss";

function Summary() {
  const [currentlyOpen, setCurrentlyOpen] = useState(1);

  function checkIfOpen(number) {
    return number === Number(currentlyOpen);
  }

  function openItem(number) {
    if (checkIfOpen(number)) {
      setCurrentlyOpen(null);
    } else {
      setCurrentlyOpen(number);
    }
  }

  return (
    <PackageEditContainer title="Summary">
      <ul className={styles.list}>
        <SummaryItem
          title="Delivery Time"
          number={1}
          checkIfOpen={checkIfOpen}
          openItem={openItem}
        >
          <DeliveryTime />
        </SummaryItem>
        <SummaryItem
          title="Delivery Location"
          number={2}
          checkIfOpen={checkIfOpen}
          openItem={openItem}
        >
          <DeliveryLocation />
        </SummaryItem>
        <SummaryItem
          title="Pricing"
          number={3}
          checkIfOpen={checkIfOpen}
          openItem={openItem}
        >
          <Pricing />
        </SummaryItem>
      </ul>
    </PackageEditContainer>
  );
}

export default Summary;

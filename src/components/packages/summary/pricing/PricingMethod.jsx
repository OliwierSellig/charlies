import { methodsList } from "../../../../services/globalVars";
import MethodItem from "./MethodItem";
import styles from "./pricingMethod.module.scss";

function PricingMethod() {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Choose Pricing Method</h4>
      <ul className={styles.list}>
        {methodsList.map((method, i) => (
          <MethodItem key={i} method={method} />
        ))}
      </ul>
    </div>
  );
}

export default PricingMethod;

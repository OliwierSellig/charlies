import { useSummary } from "../../../../context/SummaryContext";
import styles from "./methodItem.module.scss";

function MethodItem({ method }) {
  const { pricingMethod, setPricingMethod } = useSummary();

  const { image, slug, name } = method;

  return (
    <li>
      <button
        className={`${styles.btn} ${name ? styles[name.toLowerCase()] : ""} ${
          pricingMethod === slug ? styles.active : ""
        }`}
        onClick={() => setPricingMethod(slug)}
      >
        <img
          className={styles.icon}
          src={image}
          alt={name || "Payment Method"}
        />
      </button>
    </li>
  );
}

export default MethodItem;

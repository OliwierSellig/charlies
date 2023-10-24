import MethodItem from "./MethodItem";
import styles from "./pricingMethod.module.scss";

const methodsList = [
  { name: "PayPal", slug: "paypal", image: "/svg/paypal.svg" },
  { name: "MasterCard", slug: "mastercard", image: "/svg/mastercard.svg" },
  { name: "Stripe", slug: "stripe", image: "/svg/stripe.svg" },
];

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

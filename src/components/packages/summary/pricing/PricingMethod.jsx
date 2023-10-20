import MethodItem from "./MethodItem";
import styles from "./pricingMethod.module.scss";

const methodsList = [
  { name: "PayPal", image: "/svg/paypal.svg" },
  { name: "MasterCard", image: "/svg/mastercard.svg" },
  { name: "Stripe", image: "/svg/stripe.svg" },
];

function PricingMethod() {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Choose Pricing Method</h4>
      <ul className={styles.list}>
        {methodsList.map((method, i) => (
          <MethodItem key={i} name={method.name} image={method.image} />
        ))}
      </ul>
    </div>
  );
}

export default PricingMethod;

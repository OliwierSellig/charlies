import DeliveryOffer from "./DeliveryOffer";
import styles from "./deliveryType.module.scss";

function DeliveryType() {
  return (
    <div>
      <h3 className={styles.heading}>Delivery Type</h3>
      <ul className={styles.list}>
        <DeliveryOffer
          title="Recurring"
          icon="/svg/repeat-yellow.svg"
          type="recurring"
        >
          We will offer you a package every month, and you will be able to move
          the date or cancel your order at any time. Also, each delivery is on
          us; you you won't have to pay anything.
        </DeliveryOffer>
        <DeliveryOffer
          title="Once (+ $7.99)"
          icon="/svg/box-yellow.svg"
          type="once"
        >
          Your package will be delivered only once. We will also include the
          delivery cost of $7.99 to your order.
        </DeliveryOffer>
      </ul>
    </div>
  );
}

export default DeliveryType;

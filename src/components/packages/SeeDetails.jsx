import styles from "./seeDetails.module.scss";
import Modal from "../global/Modal";
import OrderDetails from "./OrderDetails";

function SeeDetails() {
  return (
    <Modal>
      <Modal.Open opens="order-details">
        <button className={styles.details}>See details</button>
      </Modal.Open>
      <Modal.Window name="order-details">
        <OrderDetails />
      </Modal.Window>
    </Modal>
  );
}

export default SeeDetails;

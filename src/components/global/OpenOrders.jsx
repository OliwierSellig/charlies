import Orders from "../orders/Orders";
import Modal from "./Modal";
import styles from "./openOrders.module.scss";

function OpenOrders() {
  return (
    <Modal>
      <Modal.Open opens="orders">
        <button className={styles.btn} aria-label="Open Orders" />
      </Modal.Open>
      <Modal.Window name="orders">
        <Orders />
      </Modal.Window>
    </Modal>
  );
}

export default OpenOrders;

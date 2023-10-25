import styles from "./openSingleOrder.module.scss";
import Modal from "../global/Modal";
import SingleOrderDetails from "./SingleOrderDetails";

function OpenSingleOrder({ order }) {
  return (
    <Modal>
      <Modal.Open opens="singleOrder">
        <button className={styles.btn}>Check Details</button>
      </Modal.Open>
      <Modal.Window name="singleOrder">
        <SingleOrderDetails order={order} />
      </Modal.Window>
    </Modal>
  );
}

export default OpenSingleOrder;

import styles from "./openSingleOrder.module.scss";
import Modal from "../global/Modal";
import SingleOrderDetails from "./SingleOrderDetails";

function OpenSingleOrder({ order }) {
  return (
    <Modal>
      <Modal.Open opens={`singleOrder${order?.id}`}>
        <button className={styles.btn}>Check Details</button>
      </Modal.Open>
      <Modal.Window name={`singleOrder${order?.id}`}>
        <SingleOrderDetails order={order} />
      </Modal.Window>
    </Modal>
  );
}

export default OpenSingleOrder;

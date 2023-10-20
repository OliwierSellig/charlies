import Modal from "../../../global/Modal";
import styles from "./otherDate.module.scss";
import Button from "../../../global/Button";

function OtherDate() {
  return (
    <Modal>
      <Modal.Open opens="order-details">
        <Button colorOnFocus="white" size="md">
          Choose other date
        </Button>
      </Modal.Open>
      <Modal.Window name="order-details">
        <div>ASDASDASD</div>
      </Modal.Window>
    </Modal>
  );
}

export default OtherDate;

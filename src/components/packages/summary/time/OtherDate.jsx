import Modal from "../../../global/Modal";
import Button from "../../../global/Button";
import SelectDeliveryDate from "./SelectDeliveryDate";

function OtherDate() {
  return (
    <Modal>
      <Modal.Open opens="order-details">
        <Button colorOnFocus="white" size="md">
          Choose other date
        </Button>
      </Modal.Open>
      <Modal.Window name="order-details">
        <SelectDeliveryDate />
      </Modal.Window>
    </Modal>
  );
}

export default OtherDate;

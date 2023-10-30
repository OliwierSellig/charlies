import Modal from "../../../global/Modal";
import Button from "../../../global/Button";
import SelectDeliveryDate from "./SelectDeliveryDate";

function OtherDate() {
  return (
    <Modal>
      <Modal.Open opens="selectDate">
        <Button colorOnFocus="white" size="md">
          Choose other date
        </Button>
      </Modal.Open>
      <Modal.Window name="selectDate">
        <SelectDeliveryDate />
      </Modal.Window>
    </Modal>
  );
}

export default OtherDate;

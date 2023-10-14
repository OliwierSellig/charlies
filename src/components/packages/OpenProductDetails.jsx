import Modal from "../global/Modal";
import ProductDetails from "./ProductDetails";
import styles from "./openProductDetails.module.scss";

function OpenProductDetails() {
  return (
    <Modal>
      <Modal.Open opens="product-details">
        <button className={styles.btn} aria-label="See product details">
          <img
            className={styles.img}
            src="/img/packages/test-item.jpg"
            alt="Chocolate"
          />
        </button>
      </Modal.Open>
      <Modal.Window name="product-details">
        <ProductDetails />
      </Modal.Window>
    </Modal>
  );
}

export default OpenProductDetails;

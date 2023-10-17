import Modal from "../global/Modal";
import ProductDetails from "./productDetails/ProductDetails";
import styles from "./openProductDetails.module.scss";

function OpenProductDetails({ product }) {
  return (
    <Modal>
      <Modal.Open opens="product-details">
        <button className={styles.btn} aria-label="See product details">
          <img className={styles.img} src={product.image} alt={product.name} />
        </button>
      </Modal.Open>
      <Modal.Window name="product-details">
        <ProductDetails product={product} />
      </Modal.Window>
    </Modal>
  );
}

export default OpenProductDetails;

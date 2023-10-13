import { useState } from "react";
import AddButton from "../../global/AddButton";
import styles from "./additionsItem.module.scss";
import ProductDetails from "../ProductDetails";

function AdditionsItem() {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <>
      <li className={styles.item}>
        <button
          className={styles.btn}
          aria-label="See product details"
          onClick={() => setViewDetails(true)}
        >
          <img
            className={styles.img}
            src="/img/packages/test-item.jpg"
            alt="Chocolate"
          />
        </button>
        <div className={styles.container}>
          <p className={styles.name}>Dark Chocolate</p>
          <p className={styles.quantity}>2 x 120g</p>
          <div className={styles.box}>
            <span className={styles.price}>$4.99</span>
            <AddButton size={4.6} />
          </div>
        </div>
      </li>
      {viewDetails && <ProductDetails setView={setViewDetails} />}
    </>
  );
}

export default AdditionsItem;

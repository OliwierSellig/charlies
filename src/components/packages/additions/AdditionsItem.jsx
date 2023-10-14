import { useState } from "react";
import AddButton from "../../global/AddButton";
import styles from "./additionsItem.module.scss";
import ProductDetails from "../ProductDetails";
import OpenProductDetails from "../OpenProductDetails";

function AdditionsItem() {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <>
      <li className={styles.item}>
        <OpenProductDetails />
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

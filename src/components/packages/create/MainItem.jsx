import { useState } from "react";
import AddButton from "../../global/AddButton";
import ProductDetails from "../ProductDetails";
import styles from "./mainItem.module.scss";

function MainItem() {
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
        <div className={styles.info}>
          <span className={styles.name}>Dark Chocolate</span>
          <span className={styles.quantity}>2 x 120g</span>
        </div>
        <AddButton />
        {viewDetails && <ProductDetails setView={setViewDetails} />}
      </li>
    </>
  );
}

export default MainItem;

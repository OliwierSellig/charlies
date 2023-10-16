import { useState } from "react";
import AddButton from "../../global/AddButton";
import ProductDetails from "../ProductDetails";
import styles from "./mainItem.module.scss";
import OpenProductDetails from "../OpenProductDetails";

function MainItem({ product }) {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <>
      <li className={styles.item}>
        <OpenProductDetails product={product} />
        <div className={styles.info}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.quantity}>{`2 x ${product.quantity}g`}</span>
        </div>
        <AddButton />
        {viewDetails && <ProductDetails setView={setViewDetails} />}
      </li>
    </>
  );
}

export default MainItem;

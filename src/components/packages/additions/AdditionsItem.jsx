import AddButton from "../../global/AddButton";
import styles from "./additionsItem.module.scss";
import OpenProductDetails from "../OpenProductDetails";

function AdditionsItem({ product }) {
  return (
    <>
      <li className={styles.item}>
        <OpenProductDetails product={product} />
        <div className={styles.container}>
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.quantity}>2 x {product?.quantity}g</p>
          <div className={styles.box}>
            <span className={styles.price}>${product.price}</span>
            <AddButton size={4.6} />
          </div>
        </div>
      </li>
    </>
  );
}

export default AdditionsItem;

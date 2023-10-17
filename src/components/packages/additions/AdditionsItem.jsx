import styles from "./additionsItem.module.scss";
import OpenProductDetails from "../OpenProductDetails";
import QuantityButtons from "../../global/QuantityButtons";
import { useCart } from "../../../context/CartContext";

function AdditionsItem({ product }) {
  const { getSingleAmountAdditions, addToAdditions, removeFromAdditions } =
    useCart();

  return (
    <>
      <li className={styles.item}>
        <OpenProductDetails product={product} />
        <div className={styles.container}>
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.quantity}>2 x {product?.quantity}g</p>
          <div className={styles.box}>
            <span className={styles.price}>${product.price}</span>
            <QuantityButtons
              size={4.6}
              amount={getSingleAmountAdditions(product)}
              onAdd={() => addToAdditions(product)}
              onRemove={() => removeFromAdditions(product)}
            />
          </div>
        </div>
      </li>
    </>
  );
}

export default AdditionsItem;

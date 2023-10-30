import { useCart } from "../../../context/CartContext";
import OpenProductDetails from "../OpenProductDetails";
import QuantityButtons from "../../global/QuantityButtons";
import styles from "./mainItem.module.scss";

function MainItem({ product }) {
  const { addToMain, removeFromMain, isMainFull, getSingleAmountMain } =
    useCart();

  return (
    <>
      <li className={styles.item}>
        <OpenProductDetails product={product} />
        <div className={styles.info}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.quantity}>{`${
            product.type === "cake" ? 1 : 2
          } x ${product.quantity}g`}</span>
        </div>
        <QuantityButtons
          size={5.2}
          amount={getSingleAmountMain(product)}
          onAdd={() => addToMain(product)}
          onRemove={() => removeFromMain(product)}
          disabled={isMainFull}
        />
      </li>
    </>
  );
}

export default MainItem;

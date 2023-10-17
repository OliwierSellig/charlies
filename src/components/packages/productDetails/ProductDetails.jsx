import NutritionalTable from "./NutritionalTable";
import styles from "./productDetails.module.scss";

function ProductDetails({ product, onCloseModal }) {
  return (
    <div className={styles.container}>
      <button
        className={styles.close}
        aria-label="Close this window"
        onClick={onCloseModal}
      />
      <div className={styles.box}>
        <img className={styles.img} src={product.image} alt={product.name} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.quantity}>Portion size: 2 x {product.quantity}g</p>
        <p className={styles.description}>{product.description}</p>
        <h4 className={styles.subheading}>Ingredients:</h4>
        <p className={styles.ingredients}>{product.ingredients}</p>
        <NutritionalTable nutrition={product.nutrition} />
      </div>
    </div>
  );
}

export default ProductDetails;

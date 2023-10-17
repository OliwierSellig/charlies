import { useProductsID } from "../../../hooks/useProductsID";
import Button from "../../global/Button";
import SwitchPlan from "../SwitchPlan";
import styles from "./existingPackage.module.scss";
import PackageItem from "./PackageItem";
import LoadingSpinner from "../../global/LoadingSpinner";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";

function ExistingPackage({ exPackage }) {
  const { isLoading, products } = useProductsID(exPackage?.products);

  const { createExistingPackage } = useCart();

  const [enlargedPackage, setEnlargedPackage] = useState(false);

  function onChoosingPackage() {
    createExistingPackage(products, enlargedPackage, exPackage);
  }

  return (
    <li className={styles.container}>
      <h3 className={styles.heading}>{exPackage.name}</h3>
      <p className={styles.description}>{exPackage.description}</p>
      <ul className={styles.list}>
        {isLoading && (
          <div className={styles.loader}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading &&
          products.length > 0 &&
          products.map((product, i) => (
            <PackageItem key={i} product={product} enlarged={enlargedPackage} />
          ))}
      </ul>
      <SwitchPlan
        marginBottom={3.2}
        onActive={() => setEnlargedPackage(true)}
        onDeActive={() => setEnlargedPackage(false)}
        normalPrice={exPackage.price}
        enlargedPrice={exPackage.enlarged_price - 10}
        enlargedPriceRaw={exPackage.enlarged_price}
        switched={enlargedPackage}
      />
      <Button
        isLink={true}
        colorOnFocus="yellow"
        size="lg"
        handleClick={onChoosingPackage}
        goTo="create-package/additions"
      >
        Choose Package
      </Button>
    </li>
  );
}

export default ExistingPackage;

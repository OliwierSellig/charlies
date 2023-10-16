import { useProductsID } from "../../../hooks/useProductsID";
import Button from "../../global/Button";
import SwitchPlan from "./SwitchPlan";
import styles from "./existingPackage.module.scss";
import PackageItem from "./PackageItem";
import LoadingSpinner from "../../global/LoadingSpinner";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";

function ExistingPackage({ exPackage }) {
  const { isLoading, products } = useProductsID(exPackage?.products);

  const { addPackage, setEnlarged } = useCart();

  const [enlargedPackage, setEnlargedPackage] = useState(false);

  function onChoosingPackage() {
    addPackage(products);
    setEnlarged(enlargedPackage);
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

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useProducts } from "../../../hooks/useProducts";
import LoadingSpinner from "../../global/LoadingSpinner";
import PackageEditContainer from "../PackageEditContainer";
import NoProductsFound from "../NoProductsFound";
import AdditionsItem from "./AdditionsItem";
import styles from "./additions.module.scss";

function Additions() {
  const navigate = useNavigate();
  const { mainReady } = useCart();
  const { products, isLoading } = useProducts(["addition"]);

  useEffect(() => {
    if (!mainReady) navigate("/packages/create-package");
  }, [mainReady, navigate]);

  return (
    <PackageEditContainer title="Something extra?">
      {isLoading && <LoadingSpinner />}
      {!isLoading && !products?.length && <NoProductsFound />}
      {!isLoading && products.length > 0 && (
        <ul className={styles.list}>
          {products?.map((product, i) => (
            <AdditionsItem key={i} product={product} />
          ))}
        </ul>
      )}
    </PackageEditContainer>
  );
}

export default Additions;

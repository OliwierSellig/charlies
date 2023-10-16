import { useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";
import LoadingSpinner from "../../global/LoadingSpinner";
import NoProductsFound from "../NoProductsFound";
import PackageEditContainer from "../PackageEditContainer";
import AdditionsItem from "./AdditionsItem";
import styles from "./additions.module.scss";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Additions() {
  const { products, isLoading } = useProducts(["addition"]);
  const { main } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!main.length) navigate("/packages/create-package");
  }, [main.length, navigate]);

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

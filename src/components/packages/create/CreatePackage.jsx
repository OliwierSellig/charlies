import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useProducts } from "../../../hooks/useProducts";
import LoadingSpinner from "../../global/LoadingSpinner";
import PackageEditContainer from "../PackageEditContainer";
import SwitchPlan from "../SwitchPlan";
import MainList from "./MainList";
import NoProductsFound from "../NoProductsFound";
import styles from "./createPackage.module.scss";

function CreatePackage() {
  const navigate = useNavigate();

  const { products, isLoading } = useProducts(
    ["classic", "exclusive", "cake", "seasonal"],
    ["addition"]
  );

  const {
    isEnlarged,
    setEnlarged,
    setMainPrice,
    CUSTOM_PACKAGE_PRICE,
    filterByType,
    packageType,
  } = useCart();

  useEffect(() => {
    if (packageType === "existing")
      navigate("/packages/create-package/additions");
  }, [packageType, navigate]);

  return (
    <PackageEditContainer title="Create your package">
      {isLoading && <LoadingSpinner />}
      {!isLoading && !products?.length && <NoProductsFound />}
      {!isLoading && products.length > 0 && (
        <>
          <ul className={styles.list}>
            <MainList ln={8} title="Shop's Classics">
              {filterByType(products, "classic")}
            </MainList>
            <MainList ln={8} title="Exclusive">
              {filterByType(products, "exclusive")}
            </MainList>
            <MainList ln={6} title="Cakes">
              {filterByType(products, "cake")}
            </MainList>
            <MainList ln={6} title="Seasonal">
              {filterByType(products, "seasonal")}
            </MainList>
          </ul>
          <div className={styles.box}>
            <h4 className={styles.more}>Hungry for more?</h4>
            <SwitchPlan
              normalPrice={CUSTOM_PACKAGE_PRICE.normal}
              enlargedPrice={CUSTOM_PACKAGE_PRICE.enlarged}
              enlargedPriceRaw={CUSTOM_PACKAGE_PRICE.raw}
              onActive={() => {
                setEnlarged(true);
                setMainPrice(CUSTOM_PACKAGE_PRICE.enlarged);
              }}
              onDeActive={() => {
                setEnlarged(false);
                setMainPrice(CUSTOM_PACKAGE_PRICE.normal);
              }}
              switched={isEnlarged}
            />
          </div>
        </>
      )}
    </PackageEditContainer>
  );
}

export default CreatePackage;

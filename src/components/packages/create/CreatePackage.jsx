import PackageEditContainer from "../PackageEditContainer";
import SwitchPlan from "../choose/SwitchPlan";
import MainList from "./MainList";
import LoadingSpinner from "../../global/LoadingSpinner";
import styles from "./createPackage.module.scss";
import { useProducts } from "../../../hooks/useProducts";
import NoProductsFound from "../NoProductsFound";

function CreatePackage() {
  const { products, isLoading } = useProducts(
    ["classic", "exclusive", "cake", "seasonal"],
    ["addition"]
  );

  function filterByType(type) {
    return products.filter((product) => product.type === type);
  }

  return (
    <PackageEditContainer title="Create your package">
      {isLoading && <LoadingSpinner />}
      {!isLoading && !products?.length && <NoProductsFound />}
      {!isLoading && products.length > 0 && (
        <>
          <ul className={styles.list}>
            <MainList ln={8} title="Shop's Classics">
              {filterByType("classic")}
            </MainList>
            <MainList ln={8} title="Exclusive">
              {filterByType("exclusive")}
            </MainList>
            <MainList ln={6} title="Cakes">
              {filterByType("cake")}
            </MainList>
            <MainList ln={6} title="Seasonal">
              {filterByType("seasonal")}
            </MainList>
          </ul>
          <div className={styles.box}>
            <h4 className={styles.more}>Hungry for more?</h4>
            <SwitchPlan marginBottom={0} />
          </div>
        </>
      )}
    </PackageEditContainer>
  );
}

export default CreatePackage;

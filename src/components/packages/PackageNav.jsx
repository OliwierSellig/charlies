import styles from "./packageNav.module.scss";
import Button from "../global/Button";
import { useLocation } from "react-router-dom";
import SeeDetails from "./SeeDetails";
import { useCart } from "../../context/CartContext";

import { useSummary } from "../../context/SummaryContext";

function PackageNav() {
  const location = useLocation();
  const isSeeingAdditions = location.pathname.endsWith("additions");
  const inSummary = location.pathname.endsWith("summary");
  const { handleSubmit, pricingMethod, submitOrder, orderError } = useSummary();
  const {
    main,
    additions,
    mainPrice,
    getAdditionPrice,
    getFullPrice,
    cartMax,
    getMainAmount,
    isMainFull,
    mainReady,
    discount,
    deliveryCost,
    clearCart,
  } = useCart();

  return (
    <>
      <nav className={styles.container}>
        <Button
          isLink={true}
          colorOnFocus="white"
          size="md"
          goTo={`/packages${
            isSeeingAdditions || inSummary
              ? `/create-package${inSummary ? "/additions" : ""}`
              : ""
          }`}
        >
          Go Back
        </Button>
        <div className={styles.info}>
          <SeeDetails />
          <div className={styles.item}>
            <span
              className={`${styles.number} ${
                isMainFull ? styles.number__full : ""
              }`}
            >
              {getMainAmount()}/{cartMax}
            </span>
            <div className={styles.price}>
              <span className={styles.price__full}>${getFullPrice()}</span>
              <span className={styles.price__details}>
                ${mainPrice} + ${getAdditionPrice()} additions
              </span>
            </div>
          </div>
        </div>
        {!inSummary && (
          <Button
            isLink={true}
            colorOnFocus="yellow"
            size="md"
            goTo={isSeeingAdditions ? "summary" : "additions"}
            disabled={isSeeingAdditions ? false : !mainReady}
          >
            {isSeeingAdditions ? "Go to Summary" : "See Additions"}
          </Button>
        )}
        {inSummary && (
          <Button
            handleClick={handleSubmit(
              () =>
                submitOrder(
                  { main, additions },
                  {
                    mainPrice,
                    additionsPrice: getAdditionPrice(),
                    fullPrice: getFullPrice(),
                    deliveryCost,
                    discount,
                  },
                  clearCart
                ),
              orderError
            )}
            colorOnFocus="yellow"
            size="md"
            disabled={!pricingMethod}
          >
            Checkout
          </Button>
        )}
      </nav>
    </>
  );
}

export default PackageNav;

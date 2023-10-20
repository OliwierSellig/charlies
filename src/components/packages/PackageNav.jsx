import styles from "./packageNav.module.scss";
import Button from "../global/Button";
import { useLocation, useNavigate } from "react-router-dom";
import SeeDetails from "./SeeDetails";
import { useCart } from "../../context/CartContext";
import { useEffect } from "react";

function PackageNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSeeingAdditions = location.pathname.endsWith("additions");
  const {
    mainPrice,
    getAdditionPrice,
    getFullPrice,
    cartMax,
    getMainAmount,
    isMainFull,
    mainReady,
    packageType,
  } = useCart();

  useEffect(() => {
    if (packageType === "existing")
      navigate("/packages/create-package/additions");
  }, [packageType, navigate]);

  return (
    <>
      <nav className={styles.container}>
        <Button
          isLink={true}
          colorOnFocus="white"
          size="md"
          goTo={`/packages${
            isSeeingAdditions && packageType === "custom"
              ? "/create-package"
              : ""
          }`}
        >
          {isSeeingAdditions && packageType === "custom"
            ? "Back to Main"
            : "Go Back"}
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
        <Button
          isLink={true}
          colorOnFocus="yellow"
          size="md"
          goTo={isSeeingAdditions ? "summary" : "additions"}
          disabled={!mainReady}
        >
          {isSeeingAdditions ? "Go to Summary" : "See Additions"}
        </Button>
      </nav>
    </>
  );
}

export default PackageNav;

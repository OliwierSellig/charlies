import styles from "./packageNav.module.scss";
import Button from "../global/Button";
import { useLocation } from "react-router-dom";
import SeeDetails from "./SeeDetails";

function PackageNav() {
  const location = useLocation();
  const isSeeingAdditions = location.pathname.endsWith("additions");

  return (
    <>
      <nav className={styles.container}>
        <Button
          isLink={true}
          colorOnFocus="white"
          size="md"
          goTo={`/packages${isSeeingAdditions ? "/create-package" : ""}`}
        >
          {isSeeingAdditions ? "Back to Main" : "Go Back"}
        </Button>
        <div className={styles.info}>
          <SeeDetails />
          <div className={styles.item}>
            <span className={styles.number}>3/5</span>
            <div className={styles.price}>
              <span className={styles.price__full}>$79.99</span>
              <span className={styles.price__details}>
                $79.99 + $0 additions
              </span>
            </div>
          </div>
        </div>
        <Button
          isLink={true}
          colorOnFocus="yellow"
          size="md"
          goTo={isSeeingAdditions ? "checkout" : "additions"}
        >
          {isSeeingAdditions ? "Go to Checkout" : "See Additions"}
        </Button>
      </nav>
    </>
  );
}

export default PackageNav;

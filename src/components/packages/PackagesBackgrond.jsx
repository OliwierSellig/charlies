import { useLocation } from "react-router-dom";
import styles from "./packagesBackground.module.scss";

function PackagesBackgrond({ children }) {
  const location = useLocation();

  const additionalClass = !location.pathname.endsWith("packages");

  return (
    <section
      className={`${styles.background} ${
        additionalClass ? styles.responsive : ""
      }`}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default PackagesBackgrond;

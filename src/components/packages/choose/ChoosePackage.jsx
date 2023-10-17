import { usePackages } from "../../../hooks/usePackages";
import LoadingSpinner from "../../global/LoadingSpinner";
import ExistingPackage from "./ExistingPackage";
import OwnPackage from "./OwnPackage";
import styles from "./choosePackage.module.scss";

function ChoosePackage() {
  const { isLoading, packages } = usePackages();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose option for you</h2>
      <OwnPackage />
      <span className={styles.or}>or</span>
      <p className={styles.subheading}>Try one of our bestseller proposals</p>
      <h2 className={styles.heading}>Choose existing package</h2>
      <ul className={styles.box}>
        {isLoading &&
          Array.from({ length: 3 }, (_, i) => (
            <li key={i} className={styles.loader}>
              <LoadingSpinner />
            </li>
          ))}
        {!isLoading &&
          packages.map((p, i) => <ExistingPackage key={i} exPackage={p} />)}
      </ul>
    </div>
  );
}

export default ChoosePackage;

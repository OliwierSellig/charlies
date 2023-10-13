import ExistingPackage from "./ExistingPackage";
import OwnPackage from "./OwnPackage";
import styles from "./choosePackage.module.scss";

function ChoosePackage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose option for you</h2>
      <OwnPackage />
      <span className={styles.or}>or</span>
      <p className={styles.subheading}>Try one of our bestseller proposals</p>
      <h2 className={styles.heading}>Choose existing package</h2>
      <div className={styles.box}>
        <ExistingPackage />
        <ExistingPackage />
        <ExistingPackage />
      </div>
    </div>
  );
}

export default ChoosePackage;

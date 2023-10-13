import Button from "../../global/Button";
import PackageItem from "./PackageItem";
import SwitchPlan from "./SwitchPlan";
import styles from "./existingPackage.module.scss";

function ExistingPackage() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Standard</h3>
      <p className={styles.description}>
        Charlie&apos;s standard is made for all of those who are looking for
        aproved and highest quality products. A package full of bakery classics.
      </p>
      <ul className={styles.list}>
        <PackageItem />
        <PackageItem />
        <PackageItem />
        <PackageItem />
      </ul>
      <SwitchPlan marginBottom={3.2} />
      <Button isLink={true} colorOnFocus="yellow" size="lg">
        Choose Standard
      </Button>
    </div>
  );
}

export default ExistingPackage;

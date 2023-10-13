import PackageEditContainer from "../PackageEditContainer";
import PackageNav from "../PackageNav";
import SwitchPlan from "../choose/SwitchPlan";
import MainList from "./MainList";
import styles from "./createPackage.module.scss";

function CreatePackage() {
  return (
    <PackageEditContainer title="Create your package">
      <ul className={styles.list}>
        <MainList ln={8}>Shop's Classics</MainList>
        <MainList ln={8}>Exclusive</MainList>
        <MainList ln={6}>Cakes</MainList>
        <MainList ln={6}>Seasonal</MainList>
      </ul>
      <div className={styles.box}>
        <h4 className={styles.more}>Hungry for more?</h4>
        <SwitchPlan marginBottom={0} />
      </div>
    </PackageEditContainer>
  );
}

export default CreatePackage;

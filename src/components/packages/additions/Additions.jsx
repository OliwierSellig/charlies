import PackageEditContainer from "../PackageEditContainer";
import PackageNav from "../PackageNav";
import AdditionsItem from "./AdditionsItem";
import styles from "./additions.module.scss";

function Additions() {
  return (
    <PackageEditContainer title="Something extra?">
      <ul className={styles.list}>
        {Array.from({ length: 10 }, (_, i) => (
          <AdditionsItem key={i} />
        ))}
      </ul>
    </PackageEditContainer>
  );
}

export default Additions;

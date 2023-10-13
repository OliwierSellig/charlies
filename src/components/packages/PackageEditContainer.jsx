import PackageNav from "./PackageNav";
import styles from "./packageEditContainer.module.scss";

function PackageEditContainer({ title, children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.content}>{children}</div>
      <PackageNav />
    </div>
  );
}

export default PackageEditContainer;

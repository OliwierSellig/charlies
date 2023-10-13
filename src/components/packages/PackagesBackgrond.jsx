import styles from "./packagesBackground.module.scss";

function PackagesBackgrond({ children }) {
  return (
    <section className={styles.background}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default PackagesBackgrond;

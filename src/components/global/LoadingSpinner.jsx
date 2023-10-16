import styles from "./loadingSpinner.module.scss";

function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingSpinner;

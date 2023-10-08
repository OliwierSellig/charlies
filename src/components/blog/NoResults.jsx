import styles from "./noResults.module.scss";

function noResults() {
  return (
    <div className={styles.box}>
      <p className={styles.text}>
        We couldn&apos;t find any results matching your query, sorry...
      </p>
      <img className={styles.icon} src="/svg/sad-white.svg" alt="Sad face" />
    </div>
  );
}

export default noResults;

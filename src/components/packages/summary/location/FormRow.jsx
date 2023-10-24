import styles from "./formRow.module.scss";

function FormRow({ label, id, error, children }) {
  return (
    <div className={styles.box}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default FormRow;

import styles from "./checkbox.module.scss";

function Checkbox({ label, children, error, checked = false, handleClick }) {
  return (
    <>
      <label className={styles.container}>
        <button
          className={styles.input}
          onClick={() => {
            handleClick?.();
          }}
        >
          {children}
        </button>
        <span className={`${styles.box} ${checked ? styles.checked : ""}`} />
        <p className={`${styles.label} ${error ? styles.error : ""}`}>
          {label}
        </p>
      </label>
    </>
  );
}

export default Checkbox;

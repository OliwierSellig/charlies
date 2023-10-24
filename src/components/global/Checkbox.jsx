import { useEffect, useState } from "react";
import styles from "./checkbox.module.scss";

function Checkbox({ label, children, error, checked = false, handleClick }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <label tabIndex={0} className={styles.container}>
        <div
          className={styles.input}
          onClick={() => {
            handleClick?.();
            setIsChecked((checked) => !checked);
          }}
        >
          {children}
        </div>
        <span className={`${styles.box} ${isChecked ? styles.checked : ""}`} />
        <p className={`${styles.label} ${error ? styles.error : ""}`}>
          {label}
        </p>
      </label>
    </>
  );
}

export default Checkbox;

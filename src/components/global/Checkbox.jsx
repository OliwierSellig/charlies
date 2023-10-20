import { useState } from "react";
import styles from "./checkbox.module.scss";

function Checkbox({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label tabIndex={0} className={styles.container}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={() => setIsChecked((checked) => !checked)}
      />
      <span className={`${styles.box} ${isChecked ? styles.checked : ""}`} />
      <p className={styles.label}>{children}</p>
    </label>
  );
}

export default Checkbox;

import styles from "./addButton.module.scss";

function AddButton({ size = 6 }) {
  return (
    <button
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className={styles.btn}
      aria-label="Add Item"
    />
  );
}

export default AddButton;

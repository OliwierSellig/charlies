import styles from "./quantityButtons.module.scss";

function QuantityButtons({
  size = 6,
  amount = 0,
  onAdd,
  onRemove,
  disabled = false,
}) {
  const largeButton = {
    width: `${size}rem`,
    height: `${size}rem`,
    transform: amount ? "none" : "scale(1.1)",
  };

  return (
    <div className={styles.container}>
      <button
        style={largeButton}
        className={`${styles.btn} ${styles.btn__remove} ${
          amount ? "" : styles.hidden
        }`}
        aria-label="Remove Item"
        onClick={onRemove}
      />
      <span className={`${styles.amount} ${amount ? "" : styles.hidden}`}>
        {amount}
      </span>
      <button
        style={largeButton}
        className={`${styles.btn} ${styles.btn__add} ${
          disabled ? styles.btn__add__disabled : ""
        }`}
        aria-label="Add Item"
        onClick={onAdd}
        disabled={disabled}
      />
    </div>
  );
}

export default QuantityButtons;

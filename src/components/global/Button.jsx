import { Link } from "react-router-dom";
import styles from "./button.module.scss";

function Button({
  isLink = false,
  colorOnFocus = "yellow",
  size = "md",
  handleClick,
  children,
  goTo = "",
  onClick,
  disabled = false,
}) {
  return isLink ? (
    <Link
      to={goTo}
      onClick={(e) => {
        if (disabled) e.preventDefault();
        else handleClick?.();
      }}
      className={`${styles.btn} ${styles[`focus__${colorOnFocus}`]} ${
        styles[`size__${size}`]
      } ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${styles.btn} ${styles[`focus__${colorOnFocus}`]} ${
        styles[`size__${size}`]
      } ${disabled ? styles.disabled : ""}`}
      onClick={handleClick || onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

import { Link, useNavigate } from "react-router-dom";
import styles from "./button.module.scss";

function Button({
  isLink = false,
  colorOnFocus = "yellow",
  size = "md",
  handleClick,
  children,
  goTo = "",
  disabled = false,
}) {
  if (isLink)
    return (
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
    );

  return (
    <button
      className={`${styles.btn} ${styles[`focus__${colorOnFocus}`]} ${
        styles[`size__${size}`]
      } ${disabled ? styles.disabled : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

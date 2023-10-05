import { Link } from "react-router-dom";
import styles from "./button.module.scss";

function Button({
  isLink = false,
  colorOnFocus = "yellow",
  size = "md",
  onClick,
  children,
}) {
  if (isLink)
    return (
      <Link
        className={`${styles.btn} ${styles[`focus__${colorOnFocus}`]} ${
          styles[`size__${size}`]
        }`}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`${styles.btn} ${styles[`focus__${colorOnFocus}`]} ${
        styles[`size__${size}`]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;

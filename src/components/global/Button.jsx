import { Link, useNavigate } from "react-router-dom";
import styles from "./button.module.scss";

function Button({
  isLink = false,
  colorOnFocus = "yellow",
  size = "md",
  handleClick,
  children,
  goTo = "",
}) {
  const navigate = useNavigate();

  if (isLink)
    return (
      <Link
        to={goTo}
        onClick={() => handleClick?.()}
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
      onClick={() => {
        if (goTo) navigate(goTo);
        handleClick?.();
      }}
    >
      {children}
    </button>
  );
}

export default Button;

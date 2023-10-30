import { NavLink } from "react-router-dom";
import styles from "./logo.module.scss";

function Logo() {
  return <NavLink to="/" className={styles.logo}>{`Charlie's`}</NavLink>;
}

export default Logo;

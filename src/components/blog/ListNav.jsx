import { NavLink } from "react-router-dom";
import styles from "./listNav.module.scss";

function ListNav() {
  return (
    <nav className={styles.container}>
      <button
        className={`${styles.btn} ${styles.btn__prev}`}
        aria-label="See Previous"
      />
      <div className={styles.choose}>
        <NavLink className={styles.link}>1</NavLink>
        <NavLink className={styles.link}>2</NavLink>
        <NavLink className={styles.link}>3</NavLink>
        <span className={styles.dots}>...</span>
        <NavLink className={styles.link}>12</NavLink>
      </div>
      <button
        className={`${styles.btn} ${styles.btn__next}`}
        aria-label="See Next"
      />
    </nav>
  );
}

export default ListNav;

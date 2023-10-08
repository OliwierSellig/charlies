import { NavLink } from "react-router-dom";
import styles from "./blogNavigation.module.scss";

function BlogNavigation() {
  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        placeholder="Search for posts"
        type="text"
      />
      <ul className={styles.list}>
        <li className={styles.all}>
          <NavLink className={`${styles.link}`}>All</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Recipes</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Ecology</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Our Cocoa</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>News</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BlogNavigation;

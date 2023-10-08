import { NavLink } from "react-router-dom";
import styles from "./blogItem.module.scss";

function BlogItem() {
  return (
    <li>
      <NavLink className={styles.item}>
        <h3 className={styles.title}>
          A new great wayu to compose chocolate has been found!
        </h3>
        <div className={styles.box}>
          <p className={styles.description}>
            A scientist from New Your have found a new better way to make
            chocolate bars. The are way more efficient as well as...
          </p>
          <span className={styles.date}>06.10.2023</span>
        </div>
      </NavLink>
    </li>
  );
}

export default BlogItem;

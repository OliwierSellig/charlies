import { NavLink } from "react-router-dom";
import styles from "./blogItem.module.scss";

function BlogItem({ id, title, date, image, children }) {
  return (
    <li>
      <NavLink
        to={`/blog/${id}`}
        style={{
          backgroundImage: `linear-gradient(
      rgba(34, 34, 34, 0.8),
      rgba(34, 34, 34, 0.8)
    ), url("${image}")`,
        }}
        className={styles.item}
      >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.box}>
          <p className={styles.description}>{children.slice(0, 100)}...</p>
          <span className={styles.date}>{date}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default BlogItem;

import MainItem from "./MainItem";
import styles from "./mainList.module.scss";

function MainList({ title, children }) {
  return (
    <li className={styles.container}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.list}>
        {children.map((product, i) => (
          <MainItem key={i} product={product} />
        ))}
      </ul>
    </li>
  );
}

export default MainList;

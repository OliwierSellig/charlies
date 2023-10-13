import MainItem from "./MainItem";
import styles from "./mainList.module.scss";

function MainList({ ln, children }) {
  return (
    <li className={styles.container}>
      <h3 className={styles.heading}>{children}</h3>
      <ul className={styles.list}>
        {Array.from({ length: ln }, (_, i) => (
          <MainItem key={i} />
        ))}
      </ul>
    </li>
  );
}

export default MainList;

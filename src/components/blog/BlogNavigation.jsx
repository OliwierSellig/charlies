import { useSearchParams } from "react-router-dom";
import styles from "./blogNavigation.module.scss";

function BlogNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("type", value);
    setSearchParams(searchParams);
  }

  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        placeholder="Search for posts"
        type="text"
      />
      <ul className={styles.list}>
        <li className={styles.all}>
          <button
            className={`${styles.link}`}
            onClick={() => handleClick("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={styles.link}
            onClick={() => handleClick("recipes")}
          >
            Recipes
          </button>
        </li>
        <li>
          <button
            className={styles.link}
            onClick={() => handleClick("ecology")}
          >
            Ecology
          </button>
        </li>
        <li>
          <button className={styles.link} onClick={() => handleClick("cocoa")}>
            Our Cocoa
          </button>
        </li>
        <li>
          <button className={styles.link} onClick={() => handleClick("news")}>
            News
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BlogNavigation;

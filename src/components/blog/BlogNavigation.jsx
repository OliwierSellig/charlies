import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import styles from "./blogNavigation.module.scss";

function BlogNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useBlog();

  useEffect(() => {
    setQuery("");
  }, [setQuery]);

  function handleClick(value) {
    searchParams.set("type", value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <nav className={styles.nav}>
      <input
        className={styles.input}
        placeholder="Search for posts"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className={styles.list}>
        <li className={styles.all}>
          <button
            className={`${styles.link} ${
              searchParams.get("type") === "all" || !searchParams.get("type")
                ? styles.active
                : ""
            }`}
            onClick={() => handleClick("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${styles.link} ${
              searchParams.get("type") === "recipes" ? styles.active : ""
            }`}
            onClick={() => handleClick("recipes")}
          >
            Recipes
          </button>
        </li>
        <li>
          <button
            className={`${styles.link} ${
              searchParams.get("type") === "ecology" ? styles.active : ""
            }`}
            onClick={() => handleClick("ecology")}
          >
            Ecology
          </button>
        </li>
        <li>
          <button
            className={`${styles.link} ${
              searchParams.get("type") === "cocoa" ? styles.active : ""
            }`}
            onClick={() => handleClick("cocoa")}
          >
            Our Cocoa
          </button>
        </li>
        <li>
          <button
            className={`${styles.link} ${
              searchParams.get("type") === "news" ? styles.active : ""
            }`}
            onClick={() => handleClick("news")}
          >
            News
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BlogNavigation;

import BlogItem from "./BlogItem";
import ListNav from "./ListNav";
import styles from "./blogList.module.scss";
import NoResults from "./NoResults.jsx";

function BlogList() {
  return (
    <>
      <ul className={styles.list}>
        {Array.from({ length: 9 }, () => (
          <BlogItem key={crypto.randomUUID()} />
        ))}
      </ul>
      <ListNav />
      {/* <NoResults /> */}
    </>
  );
}

export default BlogList;

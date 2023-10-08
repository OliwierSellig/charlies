import BlogList from "./BlogList";
import BlogNavigation from "./BlogNavigation";
import styles from "./blogMain.module.scss";

function BlogMain() {
  return (
    <section className={styles.container}>
      <BlogNavigation />
      <BlogList />
    </section>
  );
}

export default BlogMain;

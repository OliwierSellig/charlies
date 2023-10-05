import BlogIntro from "./BlogIntro";
import HistoryIntro from "./HistoryIntro";
import styles from "./brand.module.scss";

function Brand() {
  return (
    <section className={styles.section}>
      <HistoryIntro />
      <BlogIntro />
    </section>
  );
}

export default Brand;

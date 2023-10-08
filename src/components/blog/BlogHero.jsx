import styles from "./blogHero.module.scss";

function BlogHero() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Welcome to Charlie&apos;s Blog</h2>
      <p className={styles.subheading}>
        The best place for all things chocolate
      </p>
      <div className={styles.quote}>
        <div className={styles.quote__container}>
          <blockquote className={styles.quote__text}>
            In the sweetest moments of life, my father&apos;s dream was to share
            not just chocolate but the joy it brings with the world. In the
            early 1900s, amidst the cocoa-scented air of our humble shop, he
            melted hearts one truffle at a time. Today, as we continue his
            legacy, we know that sharing chocolate isn&apos;t just about
            indulgence; it&apos;s about spreading love, one velvety piece of
            sweetness at a time.
          </blockquote>
          <span className={styles.quote__name}>Warren Morgan</span>
          <span className={styles.quote__role}>- Charlie&apos;s first son</span>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;

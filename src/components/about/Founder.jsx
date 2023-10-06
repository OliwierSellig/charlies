import styles from "./founder.module.scss";

function Founder() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img
          className={styles.photo}
          src="/img/founder-photo.jpg"
          alt="Charlie Morgan"
        />
        <div className={styles.text}>
          <blockquote className={styles.quote}>
            In every velvety bite of our chocolates, I aimed to capture the
            sweet nostalgia of simpler times. In this humble shop of cocoa
            dreams, we crafted confections that whispered the stories of the
            early 1900s, wrapped in the warmth of a timeless embrace, savoring
            memories of days gone by with every delectable creation.
          </blockquote>
          <p className={styles.author}>
            <span className={styles.author__name}>Charlie Morgan </span>
            <span className={styles.author__role}>- Founder</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founder;

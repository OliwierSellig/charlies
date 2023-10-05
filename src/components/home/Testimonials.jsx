import TestimonialBox from "./TestimonialBox";
import styles from "./testimonials.module.scss";

function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What our clients say</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <TestimonialBox
            photo="test-photo-1.webp"
            name="Hugo Jenkins"
            role="Artist"
          >
            Indulging in Charlie&apos;s chocolates is pure bliss! The flavors
            are divine, and the quality is unmatched. Plus, their commitment to
            sustainability is admirable. A guilt-free treat that delights my
            taste buds and my conscience. Bravo!
          </TestimonialBox>
        </div>
        <button
          className={`${styles.btn} ${styles.btn__prev}`}
          aria-label="See Previous"
        />
        <button
          className={`${styles.btn} ${styles.btn__next}`}
          aria-label="See Next"
        />
      </div>
    </section>
  );
}

export default Testimonials;

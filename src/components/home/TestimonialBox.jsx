import styles from "./testimonialBox.module.scss";

function TestimonialBox({ photo, name, role, position, children }) {
  return (
    <div
      style={{ transform: `translateX(${position * 150}%)` }}
      className={styles.container}
    >
      <div className={styles.testimonial}>
        <blockquote className={styles.quote}>{children}</blockquote>
      </div>
      <img
        className={styles.photo}
        src={`/img/home/${photo}`}
        alt={`Photo of ${name}`}
        loading="lazy"
      />
      <span className={styles.name}>{name}</span>
      <span className={styles.role}>{role}</span>
    </div>
  );
}

export default TestimonialBox;

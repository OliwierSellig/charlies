import { useState } from "react";
import { testimonialList } from "../../services/globalVars";
import TestimonialBox from "./TestimonialBox";
import styles from "./testimonials.module.scss";

function Testimonials() {
  const [currentTest, setCurrentTest] = useState(0);

  const cantNext = currentTest + 1 === testimonialList.length;
  const cantPrev = !currentTest;

  function prevTest() {
    if (cantPrev) return;
    setCurrentTest((test) => test - 1);
  }

  function nextTest() {
    if (cantNext) return;
    setCurrentTest((test) => test + 1);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What our clients say</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          {testimonialList.map((testimonial, i) => (
            <TestimonialBox
              photo={testimonial.photo}
              name={testimonial.name}
              role={testimonial.role}
              key={testimonial.photo}
              position={i - currentTest}
            >
              {testimonial.message}
            </TestimonialBox>
          ))}
        </div>
        <button
          className={`${styles.btn} ${styles.btn__prev} ${
            cantPrev ? styles.disabled__prev : ""
          }`}
          aria-label="See Previous"
          onClick={prevTest}
          disabled={cantPrev}
        />
        <button
          className={`${styles.btn} ${styles.btn__next} ${
            cantNext ? styles.disabled__next : ""
          }`}
          aria-label="See Next"
          onClick={nextTest}
          disabled={cantNext}
        />
      </div>
    </section>
  );
}

export default Testimonials;

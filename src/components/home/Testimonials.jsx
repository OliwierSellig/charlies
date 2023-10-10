import { useState } from "react";
import TestimonialBox from "./TestimonialBox";
import styles from "./testimonials.module.scss";

const testimonialList = [
  {
    name: "Marie Jenkins",
    role: "Digital Artist",
    photo: "test-photo-1.webp",
    message:
      "Indulging in Charlie's chocolates is pure bliss! The flavorsare divine, and the quality is unmatched. Plus, their commitment tosustainability is admirable. A guilt-free treat that delights mytaste buds and my conscience. Bravo!",
  },
  {
    name: "John Anderson",
    message:
      "Absolutely indulgent! Charlie's chocolate selection is a paradise for any chocoholic. The flavors are divine, and the packaging is delightful. My taste buds are in heaven!",
    photo: "test-photo-2.webp",
    role: "Software Developer",
  },
  {
    name: "Emily Roberts",
    message:
      "I can't resist ordering from Charlie's! Their chocolates are not only delicious but also beautifully presented. The prompt delivery is a cherry on top. Highly recommended!",
    photo: "test-photo-3.webp",
    role: "Marketing Manager",
  },
  {
    name: "David Mitchell",
    message:
      "Charlie's is a treasure trove of gourmet chocolates. Each bite feels like a luxurious escape. The quality is unmatched, and their customer service is top-notch. I'm a devoted fan!",
    photo: "test-photo-4.webp",
    role: "Financial Analyst",
  },
];

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

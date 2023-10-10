import { useState } from "react";
import QuestionBox from "./QuestionBox";
import styles from "./questions.module.scss";

const questionList = [
  {
    question:
      "Can I customize a chocolate gift box with my favourites Chocolates?",
    answer:
      "Yes, you can! Beside normal products, you are able to create your own box completely from scratch and put there anything that our store has at disposal at the moment.",
  },
  {
    question:
      "How can I stay updated on your latest chocolate offerings and special deals?",
    answer:
      "You just need to follow one of our social media accounts or join our newsletter. We share all the information about new and seasonal products, as well as changes in the existing ones, right there.",
  },
  {
    question: "What is your shipping and delivery process?",
    answer:
      "We take great care in packaging your chocolates, even including cold packs during warm weather. We ensure swift and tracked shipping for a delightful and worry-free delivery experience.",
  },
  {
    question:
      "Do you offer any chocolate products that cater to specific dietary preferences?",
    answer:
      "We care about the wellness of every customer. That's why our products include vegan, sugar-free, and many more options. Just take a look, and we guarantee that everybody will find something for themselves.",
  },
];

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={`${styles.spacer} ${styles.spacer__down}`} />
      <div className={styles.container}>
        <h2 className={styles.heading}>Most frequent questions</h2>
        <ul className={styles.list}>
          {questionList.map((q, i) => (
            <QuestionBox
              questionTitle={q.question}
              key={i}
              index={i}
              isActive={i === activeIndex}
              setActiveIndex={setActiveIndex}
            >
              {q.answer}
            </QuestionBox>
          ))}
        </ul>
      </div>
      <div className={`${styles.spacer} ${styles.spacer__up}`} />
    </section>
  );
}

export default Questions;

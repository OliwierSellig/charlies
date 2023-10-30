import { useState } from "react";
import { questionList } from "../../services/globalVars";
import QuestionBox from "./QuestionBox";
import styles from "./questions.module.scss";

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

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { achievementList } from "../../services/globalVars";
import AnimatedNumber from "../global/AnimatedNumbers";
import styles from "./achievements.module.scss";

function Achievements() {
  const { ref: myRef, inView } = useInView();
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    if (inView && !hasCounted) setHasCounted(true);
  }, [inView, hasCounted]);

  return (
    <section className={styles.section} ref={myRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What we have achieved so far</h2>
        <ul className={styles.list}>
          {achievementList.map((achievement) => (
            <li className={styles.item} key={achievement.title}>
              <img
                className={styles.img}
                src={`/svg/${achievement.icon}`}
                alt={achievement.title}
              />
              <span className={styles.number}>
                {hasCounted ? <AnimatedNumber n={achievement.number} /> : 0}
              </span>
              <span className={styles.text}>{achievement.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;

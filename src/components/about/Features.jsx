import { featureList } from "../../services/globalVars";
import styles from "./features.module.scss";

function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>The definition of joy</h2>
        <ul className={styles.list}>
          {featureList.map((feature) => (
            <li className={styles.item} key={crypto.randomUUID()}>
              <img
                className={styles.icon}
                src={`/svg/${feature.icon}`}
                alt={feature.title}
              />
              <div className={styles.info}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.text}>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;

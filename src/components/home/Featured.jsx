import { featurtedList } from "../../services/globalVars";
import styles from "./featured.module.scss";

function Featured() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Featured in:</h2>
      <ul className={styles.list}>
        {featurtedList.map((item) => (
          <li className={styles.item} key={item.name}>
            <img
              className={styles.icon}
              srcSet={` /img/home/featured/${item.imageSm} 150w, /img/home/featured/${item.imageLg} 300w`}
              sizes="15vw"
              src={`/img/home/featured/${item.imageLg}`}
              alt={item.name}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Featured;

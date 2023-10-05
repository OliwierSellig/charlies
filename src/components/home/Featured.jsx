import styles from "./featured.module.scss";

const featurtedList = [
  {
    name: "The Guardian",
    imageLg: "guardian-featured-lg.webp",
    imageSm: "guardian-featured-sm.webp",
  },
  {
    name: "Forbes",
    imageLg: "forbes-featured-lg.webp",
    imageSm: "forbes-featured-sm.webp",
  },
  {
    name: "The Cook's",
    imageLg: "cooks-featured-lg.webp",
    imageSm: "cooks-featured-sm.webp",
  },
  {
    name: "All recipes",
    imageLg: "allrecipes-featured-lg.webp",
    imageSm: "allrecipes-featured-sm.webp",
  },
  {
    name: "Reader's Digest",
    imageLg: "readers-featured-lg.webp",
    imageSm: "readers-featured-sm.webp",
  },
];

function Featured() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Featured in:</h2>
      <ul className={styles.list}>
        {featurtedList.map((item) => (
          <li className={styles.item} key={item.name}>
            <img
              className={styles.icon}
              srcSet={` /img/featured/${item.imageSm} 150w, /img/featured/${item.imageLg} 300w`}
              sizes="15vw"
              src={`/img/featured/${item.imageLg}`}
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

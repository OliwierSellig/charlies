import styles from "./achievements.module.scss";

const achievementList = [
  {
    number: "116",
    title: "Years of Chocolate Excellence",
    icon: "medal-white.svg",
  },
  {
    number: "105",
    title: "Shops across the world",
    icon: "shop-white.svg",
  },
  {
    number: "99.99%",
    title: "Customer Satisfaction Rate",
    icon: "profile-white.svg",
  },
  {
    number: "2000000+",
    title: "Pounds of Premium Chocolate Sold",
    icon: "box-white.svg",
  },
];

function Achievements() {
  return (
    <section className={styles.section}>
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
              <span className={styles.number}>{achievement.number}</span>
              <span className={styles.text}>{achievement.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;

import styles from "./history.module.scss";

const eventList = [
  {
    year: 1907,
    title: "Grand Opening",
    description:
      "Charlie's Chocolate Shop opens its doors in Olympia, Washington, delighting locals with handmade chocolates and treats.",
  },
  {
    year: 1915,
    title: "Sweet Success",
    description:
      "The shop gains popularity, expanding its product line to include a wide range of confections and candies.",
  },
  {
    year: 1923,
    title: "Prohibition Pivot",
    description:
      "During Prohibition, Charlie's focuses on non-alcoholic chocolate creations to cater to the changing times.",
  },
  {
    year: 1938,
    title: "A Family Affair",
    description:
      "Charlie's passes down to the next generation, as Charlie's son takes over the shop, maintaining its legacy.",
  },
  {
    year: 1945,
    title: "Post-War Treats",
    description:
      "After World War II, Charlie's introduces new chocolate innovations inspired by international flavors and trends.",
  },
  {
    year: 1957,
    title: "Modern Makeover",
    description:
      "The shop undergoes a renovation, updating its interior and packaging to a more contemporary style.",
  },
  {
    year: 1964,
    title: "A Chocolate Revolution",
    description:
      "Charlie's embraces new techniques, pioneering the use of exotic ingredients in its chocolates, setting trends in the industry.",
  },
  {
    year: 1972,
    title: "Community Engagement",
    description:
      "The shop hosts chocolate-making workshops, engaging with the local community and becoming a beloved institution.",
  },
  {
    year: 1986,
    title: "Exporting Excellence",
    description:
      "Charlie's chocolates gain recognition outside Olympia, shipping their delectable treats across the United States.",
  },
  {
    year: 1990,
    title: "Eco-Friendly Initiatives",
    description:
      "Charlie's adopts sustainable practices, sourcing ethically and minimizing its environmental impact.",
  },
  {
    year: 1997,
    title: "Online Presence",
    description:
      "Charlie's launches a website, allowing customers to order chocolates online and expanding their reach.",
  },
  {
    year: 2002,
    title: "Artistic Chocolatiers",
    description:
      "Renowned artists collaborate with Charlie's to create edible chocolate art pieces, drawing art enthusiasts.",
  },
  {
    year: 2008,
    title: "Recession Resilience",
    description:
      "Charlie's endures the economic downturn by introducing budget-friendly chocolate options without compromising quality.",
  },
  {
    year: 2011,
    title: "Chocolate and Charity",
    description:
      "The shop partners with local charities, donating a portion of proceeds to community causes.",
  },
  {
    year: 2015,
    title: "Century Celebration",
    description:
      "Charlie's commemorates its 100th anniversary with a grand celebration, showcasing a century of chocolate craftsmanship.",
  },
  {
    year: 2020,
    title: "Pandemic Adaptation",
    description:
      "During the COVID-19 pandemic, Charlie's pivots to online sales and contactless delivery to ensure safety.",
  },
  {
    year: 2021,
    title: "Award-Winning Flavors",
    description:
      "Charlie's receives national recognition for its innovative chocolate flavors, earning prestigious industry awards.",
  },
  {
    year: 2022,
    title: "Global Expansion",
    description:
      "The brand goes international, opening its first overseas store in partnership with a European chocolatier.",
  },
  {
    year: 2023,
    title: "Charlie's Legacy",
    description:
      "Charlie's continues to thrive, beloved for its rich history and commitment to crafting exceptional chocolates for generations to come.",
  },
];

function History() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        From an idea to a world-range phenomenon
      </h2>
      <div className={styles.container}>
        <ul
          style={{ width: `${24 + eventList.length * 14}rem` }}
          className={styles.axis}
        >
          {eventList.map((e, i) => (
            <li
              style={{ left: `${12 + i * 14}rem` }}
              className={`${styles.branch} ${i % 2 ? styles.branch__up : ""}`}
              key={e.year}
            >
              {!(i % 2) && <div className={styles.line} />}
              <div className={styles.year}>
                <button className={styles.year__number}>{e.year}</button>
                <div
                  className={`${styles.box} ${
                    i % 2 ? styles.box__top : styles.box__bottom
                  }`}
                >
                  <h3 className={styles.title}>{e.title}</h3>
                  <p className={styles.description}>{e.description}</p>
                </div>
              </div>
              {i % 2 !== 0 && <div className={styles.line} />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default History;

/*

1907 - Grand Opening:
Charlie's Chocolate Shop opens its doors in Olympia, Washington, delighting locals with handmade chocolates and treats.

1915 - Sweet Success:
The shop gains popularity, expanding its product line to include a wide range of confections and candies.

1923 - Prohibition Pivot:
During Prohibition, Charlie's focuses on non-alcoholic chocolate creations to cater to the changing times.

1938 - A Family Affair:
Charlie's passes down to the next generation, as Charlie's son takes over the shop, maintaining its legacy.

1945 - Post-War Treats:
After World War II, Charlie's introduces new chocolate innovations inspired by international flavors and trends.

1957 - Modern Makeover:
The shop undergoes a renovation, updating its interior and packaging to a more contemporary style.

1964 - A Chocolate Revolution:
Charlie's embraces new techniques, pioneering the use of exotic ingredients in its chocolates, setting trends in the industry.

1972 - Community Engagement:
The shop hosts chocolate-making workshops, engaging with the local community and becoming a beloved institution.

1986 - Exporting Excellence:
Charlie's chocolates gain recognition outside Olympia, shipping their delectable treats across the United States.

1990 - Eco-Friendly Initiatives:
Charlie's adopts sustainable practices, sourcing ethically and minimizing its environmental impact.

1997 - Online Presence:
Charlie's launches a website, allowing customers to order chocolates online and expanding their reach.

2002 - Artistic Chocolatiers:
Renowned artists collaborate with Charlie's to create edible chocolate art pieces, drawing art enthusiasts.

2008 - Recession Resilience:
Charlie's endures the economic downturn by introducing budget-friendly chocolate options without compromising quality.

2011 - Chocolate and Charity:
The shop partners with local charities, donating a portion of proceeds to community causes.

2015 - Century Celebration:
Charlie's commemorates its 100th anniversary with a grand celebration, showcasing a century of chocolate craftsmanship.

2020 - Pandemic Adaptation:
During the COVID-19 pandemic, Charlie's pivots to online sales and contactless delivery to ensure safety.

2021 - Award-Winning Flavors:
Charlie's receives national recognition for its innovative chocolate flavors, earning prestigious industry awards.

2022 - Global Expansion:
The brand goes international, opening its first overseas store in partnership with a European chocolatier.

2023 - Charlie's Legacy:
Charlie's continues to thrive, beloved for its rich history and commitment to crafting exceptional chocolates for generations to come.

 */

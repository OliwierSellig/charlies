import { eventList } from "../../services/globalVars";
import styles from "./history.module.scss";

function History() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        From an idea to a world-range phenomenon
      </h2>
      <div className={styles.container}>
        <ul className={styles.axis}>
          {eventList.map((e, i) => (
            <li
              style={{ left: `${4 + i * 5}%` }}
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

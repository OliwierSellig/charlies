import styles from "./features.module.scss";

const featureList = [
  {
    icon: "eco-feature.svg",
    title: "Eco-friendly",
    description:
      "We prioritizes sustainability by sourcing ethically, reducing waste, and using eco-friendly packaging to minimize our environmental footprint",
  },
  {
    icon: "quality-feature.svg",
    title: "Best Quality",
    description:
      "Our chocolates are crafted with the finest ingredients, meticulous care, and a century-old tradition, ensuring the highest quality and exquisite taste.",
  },
  {
    icon: "delivery-feature.svg",
    title: "Comfortable Delivery",
    description:
      "Our delivery ensures timely and secure chocolate arrivals, with options for tracking, eco-conscious packaging, and exceptional customer service.",
  },
  {
    icon: "no-waste-feature.svg",
    title: "No waste",
    description:
      "We are committed to a zero-waste approach, using sustainable practices and packaging, ensuring our chocolates leave no environmental footprint.",
  },
  {
    icon: "gmo-feature.svg",
    title: "Gmo-free",
    description:
      "Our chocolates proudly contain no GMOs, preserving natural flavors and promoting healthier choices for our customers and the planet.",
  },
  {
    icon: "tradition-feature.svg",
    title: "Long lasting tradition",
    description:
      "With a tradition spanning over a decade, our chocolates embody time-honored craftsmanship, delivering a century of delightful flavors to savor.",
  },
];

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

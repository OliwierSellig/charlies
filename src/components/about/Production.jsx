import styles from "./production.module.scss";

function Production() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Froom a seed, to your door</h2>
        <p className={styles.text}>
          Our chocolate story starts with the careful selection of cacao seeds
          from responsible growers. Local farmers nurture these seeds into
          thriving cacao trees. Once harvested, the beans undergo precise
          fermentation, followed by roasting and grinding, transforming them
          into luscious cocoa mass. Our skilled chocolatiers blend and refine
          this cocoa to perfection, crafting a wide array of delectable
          confections.
        </p>
        <p className={styles.text}>
          Eco-friendly packaging, designed to preserve freshness, ensures the
          quality of our chocolates during shipping. Finally, our chocolates
          reach your doorstep, where you experience the culmination of a labor
          of love a sweet delight that captures the essence of our journey from
          seed to customer.
        </p>
      </div>
    </section>
  );
}

export default Production;

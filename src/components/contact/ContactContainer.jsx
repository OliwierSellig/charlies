import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import styles from "./contactContainer.module.scss";

function ContactContainer() {
  return (
    <section className={styles.container}>
      <ContactMap />
      <ContactInfo />
    </section>
  );
}

export default ContactContainer;

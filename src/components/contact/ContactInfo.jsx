import DirectMail from "./DirectMail";
import styles from "./contactInfo.module.scss";

function ContactInfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact us!</h2>
      <p className={styles.subheading}>
        Have any problems or questions? Our team is here to answer all your
        doubts. You can reach us every day from 8 a.m. to 6 p.m.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            className={styles.icon}
            src="/svg/location-yellow.svg"
            alt="Our Location"
          />
          <a href="/" className={styles.link}>
            Roosvelt Street, Olympia, Washington 12401, USA
          </a>
        </li>
        <li className={styles.item}>
          <img
            className={styles.icon}
            src="/svg/phone-yellow.svg"
            alt="Our Phone Number"
          />
          <a href="tel:999777888" className={styles.link}>
            +49035-032-12-65
          </a>
        </li>
        <li className={styles.item}>
          <img
            className={styles.icon}
            src="/svg/location-yellow.svg"
            alt="Our Email"
          />
          <a href="mailto:info@charlies.com" className={styles.link}>
            info@charlies.com
          </a>
        </li>
      </ul>
      <DirectMail />
    </div>
  );
}

export default ContactInfo;

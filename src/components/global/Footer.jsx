import { NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <Logo />
          <p className={styles.copyright}>
            Charlies 2023 &copy;. All rigths reserved.
          </p>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.facebook.com/"
                className={`${styles.socials__link} ${styles.socials__facebook}`}
                target="blank"
                aria-label="Visit our Facebook"
              />
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className={`${styles.socials__link} ${styles.socials__instagram}`}
                target="blank"
                aria-label="Visit our Instagram"
              />
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className={`${styles.socials__link} ${styles.socials__youtube}`}
                target="blank"
                aria-label="Visit our Youtube"
              />
            </li>
            <li>
              <a
                href="https://twitter.com/"
                className={`${styles.socials__link} ${styles.socials__twitter}`}
                target="blank"
                aria-label="Visit our Twitter"
              />
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contact__heading}>Contact</h3>
          <ul className={styles.contact__list}>
            <li className={styles.contact__item}>
              <img
                className={styles.contact__icon}
                src="/svg/phone-yellow.svg"
                alt="Phone"
              />
              <div className={styles.contact__text}>
                <h4 className={styles.contact__subheading}>Phone</h4>
                <a href="tel:999777888" className={styles.contact__link}>
                  +49035-032-12-65
                </a>
              </div>
            </li>
            <li className={styles.contact__item}>
              <img
                className={styles.contact__icon}
                src="/svg/location-yellow.svg"
                alt="Location"
              />
              <div className={styles.contact__text}>
                <h4 className={styles.contact__subheading}>Our Location</h4>
                <a href="/" className={styles.contact__link}>
                  Roosvelt Street, Olympia, Washington 12401, USA
                </a>
              </div>
            </li>
            <li className={styles.contact__item}>
              <img
                className={styles.contact__icon}
                src="/svg/mail-yellow.svg"
                alt="Email"
              />
              <div className={styles.contact__text}>
                <h4 className={styles.contact__subheading}>Email</h4>
                <a
                  href="mailto:info@charlies.com"
                  className={styles.contact__link}
                >
                  info@charlies.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.more}>
          <h3 className={styles.more__heading}>Explore</h3>
          <ul className={styles.more__list}>
            <li>
              <NavLink className={styles.more__link} to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.more__link} to="/blog">
                Visit our blog
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.more__link}>Work with us</NavLink>
            </li>
            <li>
              <NavLink className={styles.more__link}>ECO Certificates</NavLink>
            </li>
            <li>
              <NavLink className={styles.more__link} to="/contact">
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.more__link}>
                Cookie Preferences
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

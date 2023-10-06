import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "./Logo";
import { useRef, useState } from "react";

function Header() {
  const backgroundRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Logo />
      <nav
        className={`${styles.nav} ${isOpen ? styles.nav__mobileOpen : ""}`}
        ref={backgroundRef}
        onClick={(e) => {
          if (e.target === backgroundRef.current && isOpen) setIsOpen(false);
        }}
      >
        <NavLink to="/about" className={styles.link}>
          About us
        </NavLink>

        <NavLink to="/blog" className={styles.link}>
          Blog
        </NavLink>

        <NavLink to="/contact" className={styles.link}>
          Contact
        </NavLink>

        <button className={styles.cart} aria-label="Open Cart" />
      </nav>
      <button
        className={styles.mobile}
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
      />
    </header>
  );
}

export default Header;

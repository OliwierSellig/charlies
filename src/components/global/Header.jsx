import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import OpenOrders from "./OpenOrders";
import styles from "./header.module.scss";

function Header({ staticHeader = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos && currentScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    if (!staticHeader) window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, staticHeader]);

  return (
    <header
      className={`${styles.header} ${
        staticHeader ? styles.header__static : ""
      } ${isSticky ? styles.header__sticky : ""}`}
    >
      <Logo />
      <nav
        className={`${styles.nav} ${isOpen ? styles.nav__mobileOpen : ""}`}
        onClick={(e) => {
          if (isOpen) setIsOpen(false);
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

        <OpenOrders />
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

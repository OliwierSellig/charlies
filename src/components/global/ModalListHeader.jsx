import styles from "./modalListHeader.module.scss";

function ModalListHeader({ handleClose, children }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.heading}>{children}</h3>
      <button className={styles.close} onClick={handleClose} />
    </header>
  );
}

export default ModalListHeader;

import styles from "./methodItem.module.scss";

function MethodItem({ name, image }) {
  return (
    <li>
      <button
        className={`${styles.btn} ${name ? styles[name.toLowerCase()] : ""}`}
      >
        <img className={styles.icon} src={image} alt={name} />
      </button>
    </li>
  );
}

export default MethodItem;

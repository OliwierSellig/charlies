import Button from "../global/Button";
import styles from "./directMail.module.scss";

function DirectMail() {
  return (
    <>
      <h3 className={styles.heading}>Or... Mail us directly here</h3>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Full Name:
        </label>
        <input
          className={styles.input}
          placeholder="Rob Robertson"
          id="name"
          type="text"
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          placeholder="rob@media.com"
          id="email"
          type="text"
        />
        <label className={styles.label} htmlFor="message">
          Your Message:
        </label>
        <textarea
          className={styles.textarea}
          placeholder="I would like to thank you for your great service!"
          id="message"
        ></textarea>
        <Button isLink={false} size="md" colorOnFocus="yellow">
          Mail us!
        </Button>
      </form>
    </>
  );
}

export default DirectMail;

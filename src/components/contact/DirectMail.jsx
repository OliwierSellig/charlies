import { useState } from "react";
import Button from "../global/Button";
import styles from "./directMail.module.scss";
import MailSent from "./MailSent";

function DirectMail() {
  const [isMailSent, setIsMailSent] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function refreshEmail() {
    setIsMailSent(false);
    setFullName("");
    setEmail("");
    setMessage("");
  }

  function sentEmail(e) {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setIsMailSent(true);
  }

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
          maxLength={30}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          placeholder="rob@media.com"
          id="email"
          type="text"
          maxLength={35}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={styles.label} htmlFor="message">
          Your Message:
        </label>
        <textarea
          className={styles.textarea}
          placeholder="I would like to thank you for your great service!"
          id="message"
          maxLength={250}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button
          isLink={false}
          size="md"
          colorOnFocus="yellow"
          handleClick={sentEmail}
        >
          Mail us!
        </Button>
      </form>
      {isMailSent && (
        <MailSent refreshEmail={refreshEmail} fullName={fullName} />
      )}
    </>
  );
}

export default DirectMail;

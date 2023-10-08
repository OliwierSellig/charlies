import styles from "./mailSent.module.scss";

function MailSent({ refreshEmail, fullName }) {
  return (
    <div className={styles.background} onClick={refreshEmail}>
      <div className={styles.container}>
        <h2
          className={styles.heading}
        >{`Thanks for sending the email ${fullName}.`}</h2>
        <p className={styles.subheading}>
          We will get back to you ass soon as we can. Have a great day!
        </p>
        <img
          className={styles.icon}
          src="/svg/smile-white.svg"
          alt="Smiling Face"
        />
      </div>
    </div>
  );
}

export default MailSent;

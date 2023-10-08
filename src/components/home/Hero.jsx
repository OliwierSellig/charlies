import Button from "../global/Button";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <>
      <section className={styles.background}>
        <div className={styles.container}>
          <h1>Special treats for special occasions</h1>
          <div className={styles.btnBox}>
            <Button
              size="md"
              isLink={true}
              colorOnFocus="yellow"
              goTo="/treats"
            >
              Choose a treat
            </Button>
            <Button size="md" isLink={true} colorOnFocus="white" goTo="/about">
              About us
            </Button>
          </div>
        </div>
        <div className={styles.spacer} />
      </section>
    </>
  );
}

export default Hero;

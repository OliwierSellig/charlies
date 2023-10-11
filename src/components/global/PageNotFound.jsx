import Button from "./Button";
import styles from "./pageNotFound.module.scss";

function PageNotFound() {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.heading}>404</h2>
        <p className={styles.text}>
          We couldn&apos;t find the page you were looking for.
        </p>
        <Button isLink={true} colorOnFocus="yellow" size="lg" goTo="/">
          Homepage
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;

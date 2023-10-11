import { useSearchParams } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import styles from "./listNav.module.scss";

function ListNav() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { canGoNext, goNext, canGoPrev, goPrev } = useBlog();

  return (
    <nav className={styles.container}>
      <button
        className={`${styles.btn} ${styles.btn__prev} ${
          !canGoPrev(currentPage) ? styles.disabled__prev : ""
        }`}
        aria-label="See Previous"
        onClick={() => goPrev(currentPage)}
        disabled={!canGoPrev(currentPage)}
      />
      <span className={styles.number}>{currentPage}</span>
      <button
        className={`${styles.btn} ${styles.btn__next} ${
          !canGoNext(currentPage) ? styles.disabled__next : ""
        }`}
        aria-label="See Next"
        onClick={() => goNext(currentPage)}
        disabled={!canGoNext(currentPage)}
      />
    </nav>
  );
}

export default ListNav;

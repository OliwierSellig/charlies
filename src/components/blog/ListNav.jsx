import { useSearchParams } from "react-router-dom";
import styles from "./listNav.module.scss";

function ListNav({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1;

  function canGoPrev() {
    return Number(currentPage) !== 1;
  }

  function canGoNext() {
    return Math.ceil(9 * currentPage) < count;
  }

  function goPrev() {
    if (canGoPrev()) {
      searchParams.set("page", Number(currentPage) - 1);
      setSearchParams(searchParams);
    }
  }

  function goNext() {
    if (canGoNext()) {
      searchParams.set("page", Number(currentPage) + 1);
      setSearchParams(searchParams);
    }
  }

  return (
    <nav className={styles.container}>
      <button
        className={`${styles.btn} ${styles.btn__prev} ${
          !canGoPrev() ? styles.disabled__prev : ""
        }`}
        aria-label="See Previous"
        onClick={goPrev}
        disabled={!canGoPrev()}
      />
      <span className={styles.number}>{currentPage}</span>
      <button
        className={`${styles.btn} ${styles.btn__next} ${
          !canGoNext() ? styles.disabled__next : ""
        }`}
        aria-label="See Next"
        onClick={goNext}
        disabled={!canGoNext()}
      />
    </nav>
  );
}

export default ListNav;

import Button from "../global/Button";
import styles from "./blogIntro.module.scss";

function BlogIntro() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>See what&apos;s new</h3>
      <ul className={styles.list}>
        <li>
          <button className={`${styles.item} ${styles.item__1}`}>
            Indulge Your Senses: Decadent Chocolate Desserts That Will Melt Your
            Heart
          </button>
        </li>
        <li>
          <button className={`${styles.item} ${styles.item__2}`}>
            The Ultimate Guide to Crafting Irresistible Homemade Chocolate
            Truffles
          </button>
        </li>
        <li>
          <button className={`${styles.item} ${styles.item__3}`}>
            Exploring the World of Chocolate: From Bean to Bar and Beyond
          </button>
        </li>
      </ul>
      <Button size="sm" isLink={true} colorOnFocus="white" goTo="/blog">
        Visit our Blog
      </Button>
    </div>
  );
}

export default BlogIntro;

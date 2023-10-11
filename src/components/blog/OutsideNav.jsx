import LoadingSpinner from "../global/LoadingSpinner";
import BlogItem from "./BlogItem";
import styles from "./outsideNav.module.scss";

function OutsideNav({ id, posts, isLoading }) {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.heading}>You might also like:</h3>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={styles.container}>
          <ul className={styles.list}>
            {posts?.map((post) => (
              <BlogItem
                key={post.id}
                id={post.id}
                title={post.title}
                image={post.image}
                date={post.publish_date}
              >
                {post.content.slice(0, 100)}
              </BlogItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default OutsideNav;

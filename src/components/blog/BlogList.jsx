import BlogItem from "./BlogItem";
import ListNav from "./ListNav";
import styles from "./blogList.module.scss";
import NoResults from "./NoResults.jsx";
import LoadingSpinner from "../global/LoadingSpinner";
import { usePosts } from "../../hooks/usePosts";

function BlogList() {
  const { isLoading, posts, count } = usePosts();

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && posts.length > 0 && (
        <>
          <ul className={styles.list}>
            {posts.map((post) => (
              <BlogItem
                key={post.id}
                id={post.id}
                tile={post.title}
                date={post.publish_date}
                image={post.image}
              >
                {post.content.slice(0, 100)}...
              </BlogItem>
            ))}
          </ul>
          <ListNav count={count} />
        </>
      )}
      {!isLoading && !posts.length && <NoResults />}
    </>
  );
}

export default BlogList;

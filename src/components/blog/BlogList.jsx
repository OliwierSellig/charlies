import BlogItem from "./BlogItem";
import ListNav from "./ListNav";
import styles from "./blogList.module.scss";
import NoResults from "./NoResults.jsx";
import LoadingSpinner from "../global/LoadingSpinner";
import { useBlog } from "../../context/BlogContext";

function BlogList() {
  const { isLoading, posts } = useBlog();

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && posts?.length > 0 && (
        <>
          <ul className={styles.list}>
            {posts.map((post) => (
              <BlogItem
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.publish_date}
                image={post.image}
              >
                {post.content.slice(0, 100)}...
              </BlogItem>
            ))}
          </ul>
          <ListNav />
        </>
      )}
      {!isLoading && !posts?.length && <NoResults />}
    </>
  );
}

export default BlogList;

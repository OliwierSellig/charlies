import { useBlog } from "../../context/BlogContext";
import LoadingSpinner from "../global/LoadingSpinner";
import BlogItem from "./BlogItem";
import ListNav from "./ListNav";
import NoResults from "./NoResults.jsx";
import styles from "./blogList.module.scss";

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
                {post.content}
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

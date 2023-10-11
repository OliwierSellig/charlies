import { useNewsestPosts } from "../../hooks/useNewestPosts";
import BlogItem from "../blog/BlogItem";
import Button from "../global/Button";
import LoadingSpinner from "../global/LoadingSpinner";
import styles from "./blogIntro.module.scss";

function BlogIntro() {
  const { isLoading, posts } = useNewsestPosts();

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>See what&apos;s new</h3>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <ul className={styles.list}>
          {posts.slice(0, 3).map((post) => (
            <BlogItem
              title={post.title}
              id={post.id}
              image={post.image}
              key={post.id}
              date={post.publish_date}
            >
              {post.content.slice(0, 100)}...
            </BlogItem>
          ))}
        </ul>
      )}
      <Button size="sm" isLink={true} colorOnFocus="white" goTo="/blog">
        Visit our Blog
      </Button>
    </div>
  );
}

export default BlogIntro;

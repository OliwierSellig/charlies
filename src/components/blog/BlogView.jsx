import Button from "../global/Button";
import styles from "./blogView.module.scss";
import { usePost } from "../../hooks/usePost";
import LoadingSpinner from "../global/LoadingSpinner";
import OutsideNav from "./OutsideNav";
import { useNewsestPosts } from "../../hooks/useNewestPosts";
import { useEffect, useState } from "react";
import { useBlog } from "../../context/BlogContext";
import NoPostFound from "./NoPostFound";

function BlogView() {
  const { isLoading, post } = usePost();
  const { isLoading: loadingNewest, posts: newest } = useNewsestPosts();
  const { getRandomID } = useBlog();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const activePost = post?.at(0);

  useEffect(() => {
    if (!post?.length) return;

    const filtered = newest?.filter((p) => p.id !== post?.at(0).id);
    setFilteredPosts(filtered);
  }, [newest, post]);

  return (
    <section className={styles.section}>
      <article className={styles.container}>
        {isLoading && (
          <div className={styles.loader}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && activePost && (
          <>
            <header className={styles.header}>
              <img
                className={styles.cover}
                src={activePost.image}
                alt={activePost.title}
              />
              <div className={styles.headingBox}>
                <h2 className={styles.heading}>{activePost.title}</h2>
                <span className={styles.date}>{activePost.publish_date}</span>
              </div>
            </header>
            <div className={styles.box}>
              <p className={styles.text}>{activePost.content}</p>
              <nav className={styles.nav}>
                <h3 className={styles.nav__heading}>
                  Thanks for reading thi article!
                </h3>
                <div className={styles.btnBox}>
                  <Button
                    goTo="/blog"
                    size="md"
                    colorOnFocus="white"
                    isLink={true}
                  >
                    Go back
                  </Button>
                  <Button
                    goTo={`/blog/${getRandomID(filteredPosts)}`}
                    size="md"
                    colorOnFocus="yellow"
                    isLink={true}
                  >
                    See next
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
        {!isLoading && !activePost && <NoPostFound />}
      </article>

      {!isLoading && activePost && (
        <OutsideNav posts={filteredPosts} isLoading={loadingNewest} />
      )}
    </section>
  );
}

export default BlogView;

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const BlogContext = createContext();

function BlogProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const POSTS_PER_PAGE = 9;
  const [query, setQuery] = useState("");
  const { isLoading, posts, count } = usePosts(POSTS_PER_PAGE, query);

  function canGoPrev(currentPage) {
    return Number(currentPage) !== 1;
  }

  function canGoNext(currentPage) {
    return Math.ceil(POSTS_PER_PAGE * currentPage) < count;
  }

  function goPrev(currentPage) {
    if (canGoPrev(currentPage)) {
      searchParams.set("page", Number(currentPage) - 1);
      setSearchParams(searchParams);
    }
  }

  function goNext(currentPage) {
    if (canGoNext(currentPage)) {
      searchParams.set("page", Number(currentPage) + 1);
      setSearchParams(searchParams);
    }
  }

  function getRandomID(posts) {
    if (!posts) return;

    const idList = posts.map((post) => post.id);
    const randomIndex = Math.floor(Math.random() * idList.length);

    return idList.at(randomIndex);
  }

  return (
    <BlogContext.Provider
      value={{
        POSTS_PER_PAGE,
        canGoPrev,
        goPrev,
        canGoNext,
        goNext,
        isLoading,
        posts,
        count,
        query,
        setQuery,
        getRandomID,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const value = useContext(BlogContext);
  if (value === undefined)
    throw new Error("Blog context was used outside of a provider");

  return value;
}

export { BlogProvider, useBlog };

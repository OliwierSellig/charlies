import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../services/apiBlog";
import { useSearchParams } from "react-router-dom";

export function usePosts(postsCount, query) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("type");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "type", value: filterValue };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: posts, count } = {},
    error,
  } = useQuery({
    queryKey: ["posts", filter, page, query],
    queryFn: () => getPosts({ filter, page, query }),
  });

  const pageCount = Math.ceil(count / postsCount);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["posts", filter, page + 1, query],
      queryFn: () => getPosts({ filter, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["posts", filter, page - 1, query],
      queryFn: () => getPosts({ filter, page: page - 1 }),
    });

  return { isLoading, posts, error, count };
}

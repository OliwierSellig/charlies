import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/apiBlog";
import { useSearchParams } from "react-router-dom";

export function usePosts() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("type");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "type", value: filterValue };

  const page = !searchParams.get("page") ? 1 : searchParams.get("page");

  const {
    isLoading,
    data: { data: posts, count } = {},
    error,
  } = useQuery({
    queryKey: ["posts", filter, page],
    queryFn: () => getPosts({ filter, page }),
  });

  return { isLoading, posts, error, count };
}

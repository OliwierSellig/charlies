import { useQuery } from "@tanstack/react-query";
import { getNewest } from "../services/apiBlog";

export function useNewsestPosts() {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({ queryKey: ["newest"], queryFn: getNewest });

  return { isLoading, posts, error };
}

import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/apiBlog";
import { useParams } from "react-router-dom";

export function usePost() {
  const { id } = useParams();

  const {
    isLoading,
    data: post,
    error,
  } = useQuery({ queryKey: ["post", id], queryFn: () => getPost({ id }) });

  return { isLoading, post, error };
}

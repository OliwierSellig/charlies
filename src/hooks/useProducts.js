import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

export function useProducts(types, prefetch) {
  const queryClient = useQueryClient();
  const type = types || [];
  const prefetchType = prefetch || [];

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", type],
    queryFn: () => getProducts(type),
  });

  if (prefetchType.length) {
    queryClient.prefetchQuery({
      queryKey: ["products", prefetchType],
      queryFn: () => getProducts(prefetchType),
    });
  }

  return { isLoading, products, error };
}

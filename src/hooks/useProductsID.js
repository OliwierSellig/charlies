import { useQuery } from "@tanstack/react-query";
import { getProductsID } from "../services/apiProducts";

export function useProductsID(id) {
  const idList = id || [];

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", idList],
    queryFn: () => getProductsID(idList),
  });

  return { isLoading, products, error };
}

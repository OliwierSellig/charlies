import { useQuery } from "@tanstack/react-query";
import { getDiscounts } from "../services/apiDiscounts";

export function useDiscounts() {
  const {
    isLoading,
    data: discounts,
    error,
  } = useQuery({ queryKey: ["discounts"], queryFn: getDiscounts });

  return { isLoading, discounts, error };
}

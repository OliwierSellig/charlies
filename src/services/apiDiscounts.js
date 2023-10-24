import supabase from "./supabase";

export async function getDiscounts() {
  const { data, error } = await supabase.from("discounts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Discounts could not be loaded");
  }

  return data;
}

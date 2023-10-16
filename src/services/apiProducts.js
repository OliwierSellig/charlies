import supabase from "./supabase";

export async function getProducts(type) {
  let query = supabase.from("products").select("*");

  if (type?.length) {
    query = query.in("type", type);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
}

export async function getProductsID(idList) {
  if (!idList?.length) return [];
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", idList);

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return data;
}

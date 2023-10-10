import supabase from "./supabase";

export async function getPosts({ filter, page }) {
  let query = supabase.from("blog").select("*", { count: "exact" });

  if (filter !== null) {
    query = query.eq(filter.field, filter.value);
  }

  if (page) {
    const from = (page - 1) * 9;
    const to = from + 8;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return { data, count };
}

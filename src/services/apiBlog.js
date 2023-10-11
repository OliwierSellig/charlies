import supabase from "./supabase";

export async function getPosts({ filter, page, query: searchQuery }) {
  let query = supabase.from("blog").select("*", { count: "exact" });

  if (filter !== null) {
    query = query.eq(filter.field, filter.value);
  }

  if (page) {
    const from = (page - 1) * 9;
    const to = from + 8;

    query = query.range(from, to);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return { data, count };
}

export async function getPost({ id }) {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", Number(id));

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }

  return data;
}

export async function getNewest() {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .order("publish_date", { ascending: false })
    .range(0, 8);

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
}

export async function getSameType(type) {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("type", type);

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
}

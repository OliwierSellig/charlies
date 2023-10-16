import supabase from "./supabase";

export async function getPackages() {
  const { data, error } = await supabase.from("packages").select("*");

  if (error) {
    console.error(error);
    throw new Error("Packages could not be loaded");
  }

  return data;
}

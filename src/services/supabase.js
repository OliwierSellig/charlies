import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hphvbrfpibxobtrpnryi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaHZicmZwaWJ4b2J0cnBucnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDgzNDQsImV4cCI6MjAxMjQyNDM0NH0.7Wf7hN5Q8f6RJNy0TYS-eh7TvpGcSIbuderw1yIKMSQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

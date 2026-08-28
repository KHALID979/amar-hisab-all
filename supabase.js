// Supabase connection

const SUPABASE_URL = "https://bzjkjryfqscjrejibxvs.supabase.co";

const SUPABASE_KEY = "তোমার আগের sb_publishable_... key";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

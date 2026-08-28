// Supabase connection

const SUPABASE_URL = "https://bzjkjryfqscjrejibxvs.supabase.co";

const SUPABASE_KEY = "sb_publishable_cmu5zZrpiGxKosLG16unsQ_mUjy38Fn";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false
    }
  }
);

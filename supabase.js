// ========================================
// আমার হিসাব Pro
// Supabase Configuration
// ========================================

const SUPABASE_URL = "https://bzjjkryfqsjcrejibxvs.supabase.co";

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

window.supabaseClient = supabaseClient;

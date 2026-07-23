import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Server-only client: uses the service role key, bypasses Row Level Security.
// Never import this file from a Client Component — the key must stay on the server.
export function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Set them in .env.",
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
}

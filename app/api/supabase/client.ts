import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Set them in .env.",
  );
}

// Browser-safe client: uses the public anon key, respects Row Level Security.
// Syncs the session via cookies so the server (proxy.ts, Route Handlers) sees
// the same session as the browser.
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLibrarianRoute = pathname.startsWith("/librarian");
  const isClientRoute = pathname.startsWith("/client");

  if (!isLibrarianRoute && !isClientRoute) {
    return NextResponse.next();
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Set them in .env.",
    );
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  // Start from a pass-through response; the Supabase client rewrites this
  // (via setAll below) whenever it needs to refresh the session cookies.
  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  // getUser() (not getSession()) re-validates the token against Supabase Auth
  // instead of trusting whatever is in the cookie.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(loginUrl);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role;
  const wrongRole =
    (isLibrarianRoute && role !== "librarian") || (isClientRoute && role !== "client");

  if (wrongRole) {
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/client/:path*", "/librarian/:path*"],
};

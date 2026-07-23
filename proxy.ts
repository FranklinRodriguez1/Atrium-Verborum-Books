import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parseSession, SESSION_COOKIE } from "@/app/api/auth/session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = parseSession(request.cookies.get(SESSION_COOKIE)?.value);

  const isLibrarianRoute = pathname.startsWith("/librarian");
  const isClientRoute = pathname.startsWith("/client");

  if (!isLibrarianRoute && !isClientRoute) {
    return NextResponse.next();
  }

  const wrongRole =
    (isLibrarianRoute && session?.role !== "librarian") ||
    (isClientRoute && session?.role !== "client");

  if (!session || wrongRole) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/client/:path*", "/librarian/:path*"],
};

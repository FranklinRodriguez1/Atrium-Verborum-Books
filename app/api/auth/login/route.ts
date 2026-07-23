import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { findUser } from "../users";
import { SESSION_COOKIE } from "../session";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = body?.email;
  const password = body?.password;

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return NextResponse.json(
      { success: false, message: "Email and password are required." },
      { status: 400 },
    );
  }

  const user = findUser(email, password);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ success: true, user });
}

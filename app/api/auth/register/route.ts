import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { registerUser } from "../users";
import { SESSION_COOKIE } from "../session";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name;
  const email = body?.email;
  const password = body?.password;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    !name ||
    !email ||
    !password
  ) {
    return NextResponse.json(
      { success: false, message: "Name, email and password are required." },
      { status: 400 },
    );
  }

  const user = registerUser(name, email, password);

  if (!user) {
    return NextResponse.json(
      { success: false, message: "An account with that email already exists." },
      { status: 409 },
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

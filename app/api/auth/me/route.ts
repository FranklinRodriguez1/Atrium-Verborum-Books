import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { parseSession, SESSION_COOKIE } from "../session";

export async function GET() {
  const cookieStore = await cookies();
  const user = parseSession(cookieStore.get(SESSION_COOKIE)?.value);
  return NextResponse.json({ user });
}

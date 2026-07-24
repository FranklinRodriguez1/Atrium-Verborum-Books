import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../supabase/server";

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

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.user) {
    return NextResponse.json(
      { success: false, message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("nombre, role")
    .eq("id", data.user.id)
    .single();

  if (!profile) {
    return NextResponse.json(
      { success: false, message: "Account has no profile. Contact an administrator." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    user: { name: profile.nombre, role: profile.role },
  });
}

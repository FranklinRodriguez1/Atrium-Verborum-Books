import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../supabase/server";
import { createSupabaseAdminClient } from "../../supabase/admin";

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

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 409 });
  }

  if (!data.user) {
    return NextResponse.json(
      { success: false, message: "Could not create your account." },
      { status: 500 },
    );
  }

  // Self-registration always creates a client account; librarian accounts
  // are provisioned separately, not through this public form. Uses the
  // admin client since there's no RLS insert policy for profiles — this
  // one write is a system-provisioning step, not an end-user operation.
  const admin = createSupabaseAdminClient();
  const { error: profileError } = await admin.from("profiles").insert({
    id: data.user.id,
    nombre: name,
    email,
    role: "client",
    theme_preference: "light",
  });

  if (profileError) {
    return NextResponse.json({ success: false, message: profileError.message }, { status: 500 });
  }

  if (!data.session) {
    // This Supabase project requires email confirmation — there's no active
    // session yet, so the client can't redirect straight to a dashboard.
    return NextResponse.json({
      success: true,
      requiresEmailConfirmation: true,
      message: "Check your email to confirm your account before signing in.",
    });
  }

  return NextResponse.json({ success: true, user: { name, role: "client" } });
}

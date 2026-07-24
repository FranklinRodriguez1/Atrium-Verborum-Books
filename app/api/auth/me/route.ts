import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../supabase/server";

export async function GET() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ user: null });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("nombre, role")
    .eq("id", user.id)
    .single();

  if (!profile) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: { name: profile.nombre, role: profile.role } });
}

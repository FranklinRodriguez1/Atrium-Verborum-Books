import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Set them in .env before seeding.",
  );
}

const admin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function seedUser(
  email: string,
  password: string,
  nombre: string,
  role: "client" | "librarian",
) {
  const { data: existing } = await admin.auth.admin.listUsers();
  const already = existing?.users.find((u) => u.email === email);

  const user =
    already ??
    (
      await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      })
    ).data.user;

  if (!user) {
    throw new Error(`Failed to create or find auth user for ${email}`);
  }

  const { error } = await admin.from("profiles").upsert({
    id: user.id,
    nombre,
    email,
    role,
    theme_preference: "light",
  });

  if (error) {
    throw new Error(`Failed to upsert profile for ${email}: ${error.message}`);
  }

  console.log(`Seeded ${role} user: ${email}`);
}

async function main() {
  // Default test account requested for local development.
  await seedUser("test@test.com", "12345678.test", "Test", "client");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

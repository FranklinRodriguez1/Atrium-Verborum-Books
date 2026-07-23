export type Role = "client" | "librarian";

export type SessionUser = {
  name: string;
  role: Role;
};

export const SESSION_COOKIE = "lumina_session";

export function parseSession(raw: string | undefined | null): SessionUser | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    const role = parsed?.role;
    const name = parsed?.name;

    if ((role === "client" || role === "librarian") && typeof name === "string") {
      return { name, role };
    }

    return null;
  } catch {
    return null;
  }
}

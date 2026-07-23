import type { Role } from "./session";

type DemoUser = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

// In-memory only: resets on every server restart. Placeholder until a real database exists.
const demoUsers: DemoUser[] = [
  { name: "Julian Marsh", email: "client@lumina.com", password: "client123", role: "client" },
  { name: "Elena Vance", email: "librarian@lumina.com", password: "librarian123", role: "librarian" },
];

export function findUser(email: string, password: string) {
  const match = demoUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password,
  );

  if (!match) return null;

  return { name: match.name, role: match.role };
}

export function registerUser(name: string, email: string, password: string) {
  const exists = demoUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());

  if (exists) return null;

  const role: Role = "client";
  demoUsers.push({ name, email, password, role });

  return { name, role };
}

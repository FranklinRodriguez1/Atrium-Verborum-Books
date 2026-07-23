"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

type IconName =
  | "search"
  | "bell"
  | "grid"
  | "inventory"
  | "orders"
  | "users"
  | "settings"
  | "logOut";

const icons: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  grid: (
    <>
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M14 14h6v6h-6z" />
    </>
  ),
  inventory: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
    </>
  ),
  orders: (
    <>
      <circle cx="9" cy="20" r="1.25" />
      <circle cx="18" cy="20" r="1.25" />
      <path d="M2.5 4h2.5l2.4 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6.2" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  settings: (
    <>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.6 15a1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.1a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </>
  ),
  logOut: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </>
  ),
};

const navItems = [
  { label: "Dashboard", icon: "grid", href: "/librarian/dashboard" },
  { label: "Inventory", icon: "inventory", href: "/librarian/inventory" },
  { label: "Orders", icon: "orders", href: "/librarian/orders" },
  { label: "Users", icon: "users", href: "/librarian/users" },
  { label: "Settings", icon: "settings", href: "#" },
] satisfies { label: string; icon: IconName; href: string }[];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function LibrarianLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "librarian")) {
      router.push("/login");
    }
  }, [isLoading, user, router]);

  async function handleSignOut() {
    await logout();
    router.push("/login");
  }

  if (isLoading || !user || user.role !== "librarian") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#0c1018] md:flex">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col border-r border-zinc-200/70 bg-white px-4 py-6 md:flex">
        <a href="/librarian/dashboard" className="px-2">
          <p className="font-serif text-[19px] font-bold leading-none tracking-[-0.02em] text-black">
            Lumina Admin
          </p>
          <p className="mt-1 text-xs font-medium text-zinc-500">
            Librarian Panel
          </p>
        </a>

        <nav className="mt-9 flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                className={[
                  "flex h-11 items-center gap-3 rounded-lg px-3 text-sm transition",
                  isActive
                    ? "bg-zinc-100 font-semibold text-black"
                    : "font-medium text-zinc-500 hover:bg-zinc-50 hover:text-black",
                ].join(" ")}
                href={item.href}
                key={item.label}
              >
                <Icon name={item.icon} className="h-5 w-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          onClick={handleSignOut}
          className="flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-black"
        >
          <Icon name="logOut" className="h-5 w-5 shrink-0" />
          Sign Out
        </button>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col md:ml-[240px]">
        <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/95 backdrop-blur">
          <div className="flex h-[72px] items-center justify-between gap-4 px-5 sm:px-8">
            <a
              className="shrink-0 font-serif text-lg font-bold leading-none tracking-[-0.02em] text-black md:hidden"
              href="/librarian/dashboard"
            >
              Lumina Admin
            </a>

            <label className="hidden h-11 flex-1 max-w-sm items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100/80 px-4 text-slate-500 md:flex">
              <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-black" />
              <input
                aria-label="Global search"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
                placeholder="Global search..."
                type="search"
              />
            </label>

            <div className="flex shrink-0 items-center gap-2">
              <button
                aria-label="Notifications"
                className="grid h-10 w-10 place-items-center rounded-full text-black transition hover:bg-zinc-100"
              >
                <Icon name="bell" />
              </button>
              <span
                className="grid h-10 w-10 place-items-center rounded-full bg-zinc-900 text-sm font-semibold text-white"
                title={user.name}
              >
                {initials(user.name)}
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 pb-24 pt-8 sm:px-8 md:pb-10">
          {children}
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white/95 px-3 pb-4 pt-2 shadow-[0_-12px_28px_rgba(15,23,42,0.06)] backdrop-blur md:hidden">
          {navItems
            .filter((item) => item.href !== "#")
            .map((item) => {
              const isActive = pathname === item.href;

              return (
                <a
                  className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] font-semibold ${
                    isActive ? "text-black" : "text-zinc-500"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                  <span className="max-w-full truncate">{item.label}</span>
                </a>
              );
            })}
        </nav>
      </div>
    </div>
  );
}

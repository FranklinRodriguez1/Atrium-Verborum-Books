"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type IconName =
  | "search"
  | "bell"
  | "user"
  | "grid"
  | "book"
  | "map"
  | "settings";

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
  user: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20a7 7 0 0 1 14 0" />
      <circle cx="12" cy="12" r="10" />
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
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
    </>
  ),
  map: (
    <>
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </>
  ),
  settings: (
    <>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.6 15a1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.1a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </>
  ),
};

const navItems = [
  { label: "Dashboard", icon: "grid", href: "/cliente/dashboard" },
  { label: "Book Store", icon: "book", href: "/cliente/bookStore" },
  { label: "Locations", icon: "map", href: "#" },
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

export default function ClienteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fb] text-[#0c1018]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur">
        <div className="flex h-[76px] items-center justify-between gap-4 px-5 sm:px-7">
          <a
            className="shrink-0 font-serif text-[22px] font-bold leading-none tracking-[-0.02em] text-black sm:text-2xl"
            href="/"
          >
            Lumina Books
          </a>

          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <label className="hidden h-12 w-[min(20rem,38vw)] items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100/80 px-5 text-slate-500 shadow-inner shadow-white md:flex">
              <Icon
                name="search"
                className="h-[18px] w-[18px] shrink-0 text-black"
              />
              <input
                aria-label="Search your library"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
                placeholder="Search by author, title..."
                type="search"
              />
            </label>
            <button
              aria-label="Notifications"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-black transition hover:bg-zinc-100"
            >
              <Icon name="bell" />
            </button>
            <button
              aria-label="User profile"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-black transition hover:bg-zinc-100"
            >
              <Icon name="user" />
            </button>
          </div>
        </div>
      </header>

      <aside className="fixed left-0 top-[76px] z-40 hidden h-[calc(100vh-76px)] w-[228px] border-r border-zinc-200/60 bg-[#f8f9fb] px-[18px] py-4 md:block">
        <div className="mb-9">
          <p className="font-serif text-[20px] font-bold leading-tight text-black">
            Library Member
          </p>
          <p className="mt-1 text-sm leading-snug text-zinc-500">
            Premium Reader
          </p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                className={[
                  "flex h-11 items-center gap-3 rounded-lg px-3 text-sm transition",
                  isActive
                    ? "bg-white font-bold text-black shadow-[0_8px_20px_rgba(15,23,42,0.05)] ring-1 ring-zinc-100"
                    : "font-medium text-zinc-500 hover:bg-white/70 hover:text-black",
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
      </aside>

      <div className="px-5 pb-24 pt-[108px] sm:px-7 md:ml-[228px] md:px-10 lg:px-[42px]">
        {children}
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white/95 px-3 pb-4 pt-2 shadow-[0_-12px_28px_rgba(15,23,42,0.06)] backdrop-blur md:hidden">
        {navItems.map((item) => {
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
    </main>
  );
}

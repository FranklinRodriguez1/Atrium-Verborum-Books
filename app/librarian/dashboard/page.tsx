"use client";

import { useAuth } from "../../context/AuthContext";

type IconName = "book" | "orders" | "users" | "alert";

const icons: Record<IconName, React.ReactNode> = {
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
    </>
  ),
  orders: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
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
  alert: (
    <>
      <path d="M12 9v4" />
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 17h.01" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
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

const metrics = [
  { label: "Total Books", value: "12,842", note: "+2.4%", icon: "book", tone: "bg-zinc-100 text-zinc-950" },
  { label: "Open Orders", value: "37", note: "8 pending", icon: "orders", tone: "bg-blue-50 text-slate-700" },
  { label: "Registered Users", value: "1,204", note: "+18 this week", icon: "users", tone: "bg-stone-100 text-zinc-950" },
] satisfies { label: string; value: string; note: string; icon: IconName; tone: string }[];

const topSellingBooks = [
  { title: "The Architecture of Silence", author: "Eleanor Vance", unitsSold: 1245, revenue: "$34,860" },
  { title: "Minimalist Gardens", author: "Julian Thorne", unitsSold: 982, revenue: "$44,190" },
  { title: "Data Structures in Rust", author: "Alex Chen", unitsSold: 840, revenue: "$50,400" },
  { title: "Typography Today", author: "Sarah Jenkins", unitsSold: 756, revenue: "$22,680" },
];

const lowStockAlerts = [
  { title: "A History of Time", sku: "HT-001", unitsLeft: 4 },
  { title: "Modernist Cooking", sku: "MC-209", unitsLeft: 8 },
  { title: "Quiet Leadership", sku: "QL-442", unitsLeft: 12 },
];

const quickLinks = [
  { label: "Manage Inventory", href: "/librarian/inventory" },
  { label: "View Orders", href: "/librarian/orders" },
  { label: "Manage Users", href: "/librarian/users" },
];

export default function LibrarianDashboardPage() {
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0] ?? 'Librarian';

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      <section className="max-w-[560px]">
        <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
          Good morning, {firstName}.
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#232733]">
          Inventory health is stable. There are a few low-stock alerts requiring your attention today.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            className="min-w-0 rounded-lg border border-zinc-100 bg-white p-[22px] shadow-[0_16px_34px_rgba(15,23,42,0.035)]"
            key={metric.label}
          >
            <div className="mb-4 flex min-w-0 items-center gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${metric.tone}`}>
                <Icon name={metric.icon} className="h-5 w-5" />
              </span>
              <span className="truncate text-[15px] text-zinc-800">{metric.label}</span>
            </div>
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
              <strong className="text-[30px] font-bold leading-none tracking-[-0.025em] text-black">
                {metric.value}
              </strong>
              <span className="text-xs font-medium text-slate-500">{metric.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="rounded-lg border border-zinc-100 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.035)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold tracking-[-0.01em] text-black">Top Selling Books</h2>
            <a className="text-sm font-medium text-slate-600 hover:text-black" href="/librarian/inventory">
              View All
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-zinc-500">
                  <th className="pb-3 font-medium">Title &amp; Author</th>
                  <th className="pb-3 font-medium">Units Sold</th>
                  <th className="pb-3 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {topSellingBooks.map((book) => (
                  <tr key={book.title}>
                    <td className="py-3 pr-4">
                      <p className="font-medium text-black">{book.title}</p>
                      <p className="text-xs text-zinc-500">{book.author}</p>
                    </td>
                    <td className="py-3 pr-4 text-zinc-700">{book.unitsSold.toLocaleString()}</td>
                    <td className="py-3 text-zinc-700">{book.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-lg border border-zinc-100 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.035)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold tracking-[-0.01em] text-black">Low Stock Alerts</h2>
            <Icon name="alert" className="h-5 w-5 text-red-500" />
          </div>

          <div className="space-y-3">
            {lowStockAlerts.map((alert) => (
              <div
                key={alert.sku}
                className="flex items-center justify-between gap-3 rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-black">{alert.title}</p>
                  <p className="text-xs text-zinc-500">SKU: {alert.sku}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-semibold text-red-600">{alert.unitsLeft} left</p>
                  <a className="text-xs font-medium text-slate-600 hover:text-black" href="/librarian/inventory">
                    Reorder
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg border border-zinc-200 px-4 py-2.5 text-center text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

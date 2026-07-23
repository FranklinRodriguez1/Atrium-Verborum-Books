type IconName = "receipt" | "clock" | "cash" | "search" | "eye";

const icons: Record<IconName, React.ReactNode> = {
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  cash: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 12h.01" />
      <path d="M18 12h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
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

type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: OrderStatus;
  date: string;
};

const statusTone: Record<OrderStatus, string> = {
  Pending: "bg-amber-50 text-amber-700",
  Processing: "bg-blue-50 text-slate-700",
  Shipped: "bg-indigo-50 text-indigo-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Cancelled: "bg-red-50 text-red-600",
};

const metrics = [
  { label: "Total Orders", value: "1,486", note: "This month", icon: "receipt" as const, tone: "bg-zinc-100 text-zinc-950" },
  { label: "Pending Orders", value: "37", note: "Needs review", icon: "clock" as const, tone: "bg-amber-50 text-amber-600" },
  { label: "Revenue", value: "$24,850", note: "+12% vs last month", icon: "cash" as const, tone: "bg-stone-100 text-zinc-950" },
];

const orders: Order[] = [
  { id: "ORD-3021", customer: "Julian Marsh", items: 2, total: 42.5, status: "Pending", date: "2026-07-21" },
  { id: "ORD-3020", customer: "Elena Vance", items: 1, total: 18.5, status: "Processing", date: "2026-07-21" },
  { id: "ORD-3019", customer: "Marcus Reed", items: 3, total: 78.94, status: "Shipped", date: "2026-07-20" },
  { id: "ORD-3018", customer: "Sarah Jenkins", items: 1, total: 24.95, status: "Delivered", date: "2026-07-19" },
  { id: "ORD-3017", customer: "Lydia Green", items: 2, total: 51.0, status: "Cancelled", date: "2026-07-18" },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export default function OrdersPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <section className="max-w-xl">
        <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
          Orders
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#232733]">
          Review incoming orders, track fulfillment status, and keep customers up to date.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="min-w-0 rounded-lg border border-zinc-100 bg-white p-[22px] shadow-[0_16px_34px_rgba(15,23,42,0.035)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${metric.tone}`}>
                <Icon name={metric.icon} className="h-5 w-5" />
              </span>
              <span className="truncate text-[15px] text-zinc-800">{metric.label}</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <strong className="text-[26px] font-bold leading-none tracking-[-0.02em] text-black">
                {metric.value}
              </strong>
              <span className="text-xs font-medium text-slate-500">{metric.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-lg border border-zinc-100 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.035)]">
        <div className="flex flex-col gap-3 border-b border-zinc-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex h-11 flex-1 items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-slate-500 sm:max-w-sm">
            <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-black" />
            <input
              aria-label="Search orders"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
              placeholder="Search by order ID or customer..."
              type="search"
            />
          </label>

          <span className="shrink-0 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700">
            All Statuses
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-5 py-4 font-medium text-black">{order.id}</td>
                  <td className="px-5 py-4 text-zinc-700">{order.customer}</td>
                  <td className="px-5 py-4 text-zinc-700">{order.items}</td>
                  <td className="px-5 py-4 font-medium text-black">{formatPrice(order.total)}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-zinc-500">{order.date}</td>
                  <td className="px-5 py-4">
                    <button aria-label={`View order ${order.id}`} className="text-zinc-500 transition hover:text-black">
                      <Icon name="eye" className="h-[18px] w-[18px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-zinc-100 p-5">
          <p className="text-sm text-zinc-500">Showing 1 to {orders.length} of 1,486 entries</p>
        </div>
      </section>
    </div>
  );
}

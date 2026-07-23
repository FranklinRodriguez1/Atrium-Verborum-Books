type IconName = "box" | "alert" | "cash" | "search" | "download" | "edit" | "trash" | "chevronLeft" | "chevronRight" | "plus";

const icons: Record<IconName, React.ReactNode> = {
  box: (
    <>
      <path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  alert: (
    <>
      <path d="M12 9v4" />
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 17h.01" />
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
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  trash: (
    <>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </>
  ),
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
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

type StockStatus = "In Stock" | "Low";

type InventoryBook = {
  id: string;
  title: string;
  author: string;
  category: string;
  stockUnits: number;
  stockPercent: number;
  stockStatus: StockStatus;
  price: number;
  image: string;
};

const metrics = [
  { label: "Total Books", value: "12,842", note: "+2% MoM", icon: "box" as const, tone: "bg-zinc-100 text-zinc-950" },
  { label: "Low Stock Alert", value: "24", note: "Requires Action", icon: "alert" as const, tone: "bg-red-50 text-red-600" },
  { label: "Total Value", value: "$342,850.00", note: "Current catalog", icon: "cash" as const, tone: "bg-stone-100 text-zinc-950" },
];

const inventory: InventoryBook[] = [
  {
    id: "inv-001",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Psychological Thriller",
    stockUnits: 45,
    stockPercent: 70,
    stockStatus: "In Stock",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "inv-002",
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Philosophy",
    stockUnits: 3,
    stockPercent: 6,
    stockStatus: "Low",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "inv-003",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    stockUnits: 112,
    stockPercent: 95,
    stockStatus: "In Stock",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "inv-004",
    title: "Modernism & Beyond",
    author: "Julian Thorne",
    category: "Modernism",
    stockUnits: 8,
    stockPercent: 14,
    stockStatus: "Low",
    price: 24.95,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "inv-005",
    title: "Urban Geometry",
    author: "Marcus Reed",
    category: "Architecture",
    stockUnits: 61,
    stockPercent: 80,
    stockStatus: "In Stock",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=200&q=80",
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export default function InventoryPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
            Inventory Management
          </h1>
          <p className="mt-3 text-[15px] leading-6 text-[#232733]">
            Monitor and manage your bookstore&apos;s stock levels, pricing, and book catalog in real-time.
          </p>
        </div>

        <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#111527] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
          <Icon name="plus" className="h-4 w-4" />
          Add New Book
        </button>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="min-w-0 rounded-lg border border-zinc-100 bg-white p-[22px] shadow-[0_16px_34px_rgba(15,23,42,0.035)]"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${metric.tone}`}>
                <Icon name={metric.icon} className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-500">
                {metric.note}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{metric.label}</p>
            <strong className="mt-2 block text-[26px] font-bold leading-none tracking-[-0.02em] text-black">
              {metric.value}
            </strong>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-lg border border-zinc-100 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.035)]">
        <div className="flex flex-col gap-3 border-b border-zinc-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex h-11 flex-1 items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-slate-500 sm:max-w-sm">
            <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-black" />
            <input
              aria-label="Search inventory"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
              placeholder="Search by title, author or ISBN..."
              type="search"
            />
          </label>

          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700">
              All Categories
            </span>
            <span className="rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700">
              In Stock
            </span>
            <button
              aria-label="Export inventory"
              className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-50"
            >
              <Icon name="download" className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-5 py-3 font-medium">Cover</th>
                <th className="px-5 py-3 font-medium">Title &amp; Author</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Stock Level</th>
                <th className="px-5 py-3 font-medium">Price</th>
                <th className="px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {inventory.map((book) => (
                <tr key={book.id}>
                  <td className="px-5 py-4">
                    <div className="h-14 w-11 overflow-hidden rounded bg-zinc-100">
                      <img alt={book.title} className="h-full w-full object-cover" src={book.image} />
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-black">{book.title}</p>
                    <p className="text-xs text-zinc-500">{book.author}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className={book.stockStatus === "Low" ? "text-red-600" : "text-zinc-700"}>
                        {book.stockUnits} Units
                      </span>
                      {book.stockStatus === "Low" ? (
                        <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-600">
                          Low
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-1.5 h-[3px] w-24 rounded-full bg-zinc-200">
                      <div
                        className={`h-full rounded-full ${book.stockStatus === "Low" ? "bg-red-500" : "bg-black"}`}
                        style={{ width: `${book.stockPercent}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-black">{formatPrice(book.price)}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <button aria-label={`Edit ${book.title}`} className="transition hover:text-black">
                        <Icon name="edit" className="h-[18px] w-[18px]" />
                      </button>
                      <button aria-label={`Delete ${book.title}`} className="transition hover:text-red-600">
                        <Icon name="trash" className="h-[18px] w-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">Showing 1 to {inventory.length} of 248 entries</p>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous page"
              className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:bg-zinc-50"
            >
              <Icon name="chevronLeft" className="h-4 w-4" />
            </button>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#111527] text-sm font-semibold text-white">
              1
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-lg text-sm font-medium text-zinc-600">2</span>
            <span className="grid h-9 w-9 place-items-center rounded-lg text-sm font-medium text-zinc-600">3</span>
            <button
              aria-label="Next page"
              className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:bg-zinc-50"
            >
              <Icon name="chevronRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

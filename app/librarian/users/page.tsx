type IconName = "users" | "userCheck" | "userPlus" | "search";

const icons: Record<IconName, React.ReactNode> = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  userCheck: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m17 11 2 2 4-4" />
    </>
  ),
  userPlus: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
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

type UserStatus = "Active" | "Disabled";

type ClientUser = {
  id: string;
  name: string;
  email: string;
  joined: string;
  orders: number;
  status: UserStatus;
};

const metrics = [
  { label: "Total Users", value: "1,204", note: "Registered readers", icon: "users" as const, tone: "bg-zinc-100 text-zinc-950" },
  { label: "Active Users", value: "1,148", note: "95% of total", icon: "userCheck" as const, tone: "bg-emerald-50 text-emerald-700" },
  { label: "New This Month", value: "18", note: "+4.5%", icon: "userPlus" as const, tone: "bg-stone-100 text-zinc-950" },
];

const users: ClientUser[] = [
  { id: "usr-001", name: "Julian Marsh", email: "julian.marsh@example.com", joined: "2025-11-02", orders: 8, status: "Active" },
  { id: "usr-002", name: "Elena Vance", email: "elena.vance@example.com", joined: "2025-12-14", orders: 3, status: "Active" },
  { id: "usr-003", name: "Marcus Reed", email: "marcus.reed@example.com", joined: "2026-01-09", orders: 12, status: "Active" },
  { id: "usr-004", name: "Sarah Jenkins", email: "sarah.jenkins@example.com", joined: "2026-02-27", orders: 1, status: "Disabled" },
  { id: "usr-005", name: "Lydia Green", email: "lydia.green@example.com", joined: "2026-05-18", orders: 5, status: "Active" },
];

export default function UsersPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <section className="max-w-xl">
        <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
          Users
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#232733]">
          View registered readers and manage account access.
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
              aria-label="Search users"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
              placeholder="Search by name or email..."
              type="search"
            />
          </label>

          <span className="shrink-0 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700">
            All Statuses
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Joined</th>
                <th className="px-5 py-3 font-medium">Orders</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-4 font-medium text-black">{user.name}</td>
                  <td className="px-5 py-4 text-zinc-700">{user.email}</td>
                  <td className="px-5 py-4 text-zinc-500">{user.joined}</td>
                  <td className="px-5 py-4 text-zinc-700">{user.orders}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="cursor-pointer text-sm font-medium text-zinc-600 transition hover:text-black">
                      {user.status === "Active" ? "Disable" : "Activate"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-zinc-100 p-5">
          <p className="text-sm text-zinc-500">Showing 1 to {users.length} of 1,204 entries</p>
        </div>
      </section>
    </div>
  );
}

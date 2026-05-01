type IconName =
  | 'search'
  | 'bell'
  | 'user'
  | 'grid'
  | 'book'
  | 'map'
  | 'settings'
  | 'receipt'
  | 'users'
  | 'box'
  | 'chevronLeft'
  | 'chevronRight'
  | 'plus';

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
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.6 15a1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.1a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
    </>
  ),
  receipt: (
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
  box: (
    <>
      <path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
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

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
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

const navItems = [
  { label: 'Dashboard', icon: 'grid' },
  { label: 'Book Store', icon: 'book' },
  { label: 'Locations', icon: 'map' },
  { label: 'Settings', icon: 'settings' },
] satisfies { label: string; icon: IconName }[];

const metrics = [
  { label: 'Total Sales', value: '$24,850', note: '+12%', icon: 'receipt', tone: 'bg-zinc-100 text-zinc-950' },
  { label: 'Active Users', value: '1,204', note: '+4.5%', icon: 'users', tone: 'bg-blue-50 text-slate-700' },
  { label: 'Books in Stock', value: '8,432', note: 'Updated daily', icon: 'box', tone: 'bg-stone-100 text-zinc-950' },
] satisfies { label: string; value: string; note: string; icon: IconName; tone: string }[];

const continueBooks = [
  {
    title: 'The Architecture of Silence',
    author: 'Elena Richardson',
    percent: 65,
    pagesLeft: '120 pages left',
    image:
      'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Natural Philosophy',
    author: 'Dr. Marcus Thorne',
    percent: 28,
    pagesLeft: '314 pages left',
    image:
      'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Ethereal Perspectives',
    author: 'Sarah Jenkins',
    percent: 92,
    pagesLeft: '12 pages left',
    image:
      'https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=900&q=85',
  },
];

const curatedBooks = [
  {
    title: 'The Quiet Room',
    genre: 'Philosophy',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85',
  },
  {
    title: 'London After Dark',
    genre: 'History',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=85',
  },
  {
    title: 'Zenith',
    genre: 'Science Fiction',
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=85',
  },
  {
    title: 'Paper Trails',
    genre: 'Memoir',
    image:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=85',
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f9fb] text-[#0c1018]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur">
        <div className="flex h-[76px] items-center justify-between gap-4 px-5 sm:px-7">
          <a className="shrink-0 font-serif text-[22px] font-bold leading-none tracking-[-0.02em] text-black sm:text-2xl" href="#">
            Lumina Books
          </a>

          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <label className="hidden h-12 w-[min(20rem,38vw)] items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100/80 px-5 text-slate-500 shadow-inner shadow-white md:flex">
              <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-black" />
              <input
                aria-label="Search your library"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-500"
                placeholder="Search your library..."
                type="search"
              />
            </label>
            <button aria-label="Notifications" className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-black transition hover:bg-zinc-100">
              <Icon name="bell" />
            </button>
            <button aria-label="User profile" className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-black transition hover:bg-zinc-100">
              <Icon name="user" />
            </button>
          </div>
        </div>
      </header>

      <aside className="fixed left-0 top-[76px] z-40 hidden h-[calc(100vh-76px)] w-[228px] border-r border-zinc-200/60 bg-[#f8f9fb] px-[18px] py-4 md:block">
        <div className="mb-9">
          <p className="font-serif text-[20px] font-bold leading-tight text-black">Library Member</p>
          <p className="mt-1 text-sm leading-snug text-zinc-500">Premium Reader</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <a
              className={[
                'flex h-11 items-center gap-3 rounded-lg px-3 text-sm transition',
                index === 0
                  ? 'bg-white font-bold text-black shadow-[0_8px_20px_rgba(15,23,42,0.05)] ring-1 ring-zinc-100'
                  : 'font-medium text-zinc-500 hover:bg-white/70 hover:text-black',
              ].join(' ')}
              href="#"
              key={item.label}
            >
              <Icon name={item.icon} className="h-5 w-5 shrink-0" />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="px-5 pb-12 pt-[108px] sm:px-7 md:ml-[228px] md:px-10 lg:px-[42px]">
        <div className="mx-auto w-full max-w-[826px]">
          <section className="max-w-[560px]">
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
              Good morning, Julian.
            </h1>
            <p className="mt-3 text-[15px] leading-6 text-[#232733]">
              Welcome back to your Lumina library. Your current reading session is waiting for you.
            </p>
          </section>

          <section className="mt-[58px]">
            <div className="mb-6 flex items-end justify-between gap-5">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-black">Library Overview</h2>
              <a className="shrink-0 border-b border-slate-400 text-sm font-medium text-slate-600 hover:text-black" href="#">
                View full reports
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
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
                    <strong className="text-[30px] font-bold leading-none tracking-[-0.025em] text-black">{metric.value}</strong>
                    <span className={metric.note.startsWith('+') ? 'text-xs font-semibold text-emerald-600' : 'text-xs font-medium text-slate-500'}>
                      {metric.note}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-[72px]">
            <div className="mb-6 flex items-center justify-between gap-5">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-black">Continue Reading</h2>
              <div className="flex shrink-0 gap-2">
                <button aria-label="Previous books" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white/40 text-black transition hover:bg-white">
                  <Icon name="chevronLeft" className="h-5 w-5" />
                </button>
                <button aria-label="Next books" className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white/40 text-black transition hover:bg-white">
                  <Icon name="chevronRight" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="dashboard-scrollbar -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-3 sm:-mx-7 sm:px-7 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
              {continueBooks.map((book, index) => (
                <article className="relative min-w-[260px] snap-start md:min-w-0" key={book.title}>
                  <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-zinc-200 bg-white shadow-[0_20px_36px_rgba(15,23,42,0.13)]">
                    <img alt="" className="h-full w-full object-cover" src={book.image} />
                  </div>
                  {index === continueBooks.length - 1 ? (
                    <button
                      aria-label="Add a new book"
                      className="absolute right-[-14px] top-[48%] grid h-[70px] w-[56px] -translate-y-1/2 place-items-center rounded-full bg-[#111527] text-white shadow-[0_14px_28px_rgba(17,21,39,0.28)] ring-1 ring-white/20 transition hover:scale-105 sm:right-[-18px]"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-white">
                        <Icon name="plus" className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  ) : null}

                  <div className="mt-4 min-w-0">
                    <h3 className="truncate text-[15px] font-medium leading-tight text-black">{book.title}</h3>
                    <p className="mt-1 truncate text-xs text-zinc-600">By {book.author}</p>
                    <div className="mt-3 h-[3px] rounded-full bg-zinc-200">
                      <div className="h-full rounded-full bg-black" style={{ width: `${book.percent}%` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3 text-[11px] leading-none">
                      <span className="shrink-0 text-zinc-700">{book.percent}% Completed</span>
                      <span className="truncate text-right font-medium text-slate-700">{book.pagesLeft}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-[70px]">
            <div className="mb-6 flex items-end justify-between gap-5">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-black">Curated for You</h2>
              <a className="shrink-0 text-sm font-medium text-slate-600 hover:text-black" href="#">
                Explore Library
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {curatedBooks.map((book) => (
                <article className="min-w-0 rounded-md border border-zinc-200/70 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.035)]" key={book.title}>
                  <div className="aspect-[4/5] overflow-hidden rounded bg-zinc-100">
                    <img alt="" className="h-full w-full object-cover" src={book.image} />
                  </div>
                  <h3 className="mt-3 truncate text-[15px] font-medium leading-tight text-black">{book.title}</h3>
                  <p className="mt-1 truncate text-xs leading-tight text-zinc-600">{book.genre}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-zinc-200 bg-white/95 px-3 pb-4 pt-2 shadow-[0_-12px_28px_rgba(15,23,42,0.06)] backdrop-blur md:hidden">
        {navItems.map((item, index) => (
          <a className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[10px] font-semibold ${index === 0 ? 'text-black' : 'text-zinc-500'}`} href="#" key={item.label}>
            <Icon name={item.icon} className="h-5 w-5" />
            <span className="max-w-full truncate">{item.label}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}

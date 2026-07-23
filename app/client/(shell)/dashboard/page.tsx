"use client";

import { useAuth } from "../../../context/AuthContext";

type IconName =
  | 'bookOpen'
  | 'flame'
  | 'clock'
  | 'chevronLeft'
  | 'chevronRight'
  | 'plus';

const icons: Record<IconName, React.ReactNode> = {
  bookOpen: (
    <>
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11v18H4.5A2.5 2.5 0 0 1 2 17.5z" />
      <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13v18h6.5a2.5 2.5 0 0 0 2.5-2.5z" />
    </>
  ),
  flame: (
    <>
      <path d="M12 22a7 7 0 0 0 7-7c0-2.5-1.5-4-2.5-5.5C15 7.5 14.5 5.5 14 3c-1.5 2-2 4-2 6-2-1-2.5-3-2.5-3S8 8.5 8 11.5c-1 .5-2 1.5-2 3.5a6 6 0 0 0 6 7Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
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

const metrics = [
  { label: 'Books Read', value: '42', note: '+3 this month', icon: 'bookOpen', tone: 'bg-zinc-100 text-zinc-950' },
  { label: 'Reading Streak', value: '12 days', note: 'Personal best!', icon: 'flame', tone: 'bg-orange-50 text-orange-600' },
  { label: 'Total Hours Reading', value: '156h', note: 'Avg. 45m/day', icon: 'clock', tone: 'bg-stone-100 text-zinc-950' },
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
  const { user } = useAuth();
  const firstName = user?.name.split(' ')[0] ?? 'Reader';

  return (
    <div className="mx-auto w-full max-w-[826px]">
          <section className="max-w-[560px]">
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#080b13] sm:text-[32px]">
              Good morning, {firstName}.
            </h1>
            <p className="mt-3 text-[15px] leading-6 text-[#232733]">
              Welcome back to your Lumina library. Your current reading session is waiting for you.
            </p>
          </section>

          <section className="mt-[58px]">
            <div className="mb-6 flex items-end justify-between gap-5">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-black">Your Reading Overview</h2>
              <a className="shrink-0 border-b border-slate-400 text-sm font-medium text-slate-600 hover:text-black" href="#">
                View detailed stats
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
                    <span
                      className={
                        metric.note.startsWith('+') || metric.note === 'Personal best!'
                          ? 'text-xs font-semibold text-emerald-600'
                          : 'text-xs font-medium text-slate-500'
                      }
                    >
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
  );
}

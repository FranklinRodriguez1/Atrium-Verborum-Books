type IconName = "pin" | "phone" | "clock" | "map";

const icons: Record<IconName, React.ReactNode> = {
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  map: (
    <>
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
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

type Venue = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  flagship?: boolean;
  image: string;
};

const venues: Venue[] = [
  {
    id: "loc-london",
    name: "Lexicon London",
    address: "24 Kensington High Street, London W8 4PT",
    phone: "+44 20 7946 0123",
    hours: "09:00 - 20:00",
    flagship: true,
    image: "https://images.unsplash.com/photo-1521123845560-14093637aa7d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "loc-nyc",
    name: "Lexicon NYC",
    address: "156 5th Avenue, New York, NY 10010",
    phone: "+1 212 555 0198",
    hours: "10:00 - 21:00",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "loc-paris",
    name: "Lexicon Paris",
    address: "42 Rue de Rivoli, 75004 Paris",
    phone: "+33 1 42 77 00 00",
    hours: "09:30 - 19:30",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "loc-tokyo",
    name: "Lexicon Tokyo",
    address: "1-1-1 Umeda, Kita-ku, Osaka 530-0001",
    phone: "+81 6 6345 1234",
    hours: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=900&q=80",
  },
];

export default function LocationsPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px]">
      <section className="max-w-2xl">
        <h1 className="font-serif text-[32px] font-semibold tracking-[-0.03em] text-black sm:text-[36px]">
          Venues
        </h1>
        <p className="mt-3 text-[15px] leading-6 text-[#232733]">
          Find a Lumina Lexicon sanctuary near you. Each location is designed as a quiet haven for reading,
          reflection, and community.
        </p>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        {venues.map((venue) => (
          <article
            key={venue.id}
            className="overflow-hidden rounded-[1.5rem] border border-zinc-200/70 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.05)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
              <img alt={venue.name} className="h-full w-full object-cover" src={venue.image} />
              {venue.flagship ? (
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-800">
                  Flagship Store
                </span>
              ) : null}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-[-0.01em] text-black">{venue.name}</h2>
                  <p className="mt-1 text-sm text-zinc-500">{venue.address}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-zinc-200 text-zinc-600">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
                <span className="inline-flex items-center gap-2">
                  <Icon name="phone" className="h-4 w-4 text-zinc-400" />
                  {venue.phone}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="clock" className="h-4 w-4 text-zinc-400" />
                  {venue.hours}
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-xl bg-[#111527] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
                  Get Directions
                </button>
                <button className="flex-1 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50">
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-[1.75rem] bg-[#1b1f2e] px-6 py-12 text-center text-white">
        <div className="mx-auto flex w-fit flex-col items-center">
          <Icon name="map" className="h-6 w-6 text-white/70" />
          <h2 className="mt-4 text-xl font-semibold tracking-[-0.01em]">Explore the Map View</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
            See all our locations and partner libraries on an interactive global map.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100">
            Launch Interactive Map
          </button>
        </div>
      </section>
    </div>
  );
}

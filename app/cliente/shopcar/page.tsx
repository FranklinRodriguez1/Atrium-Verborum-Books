type CartBook = {
  id: string;
  title: string;
  author: string;
  format: string;
  price: number;
  quantity: number;
  image: string;
};

const cartItems: CartBook[] = [
  {
    id: "cart-001",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    format: "Hardcover",
    price: 18.5,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "cart-002",
    title: "Essentialism",
    author: "Greg McKeown",
    format: "Digital Edition",
    price: 24,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
  },
];

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);
const estimatedTax = 5.32;
const total = subtotal + estimatedTax;

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function IconBase({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
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
      {children}
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </IconBase>
  );
}

function Trash2Icon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </IconBase>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M2 19.5A2.5 2.5 0 0 1 4.5 17H11v4H4.5A2.5 2.5 0 0 0 2 23.5z" />
      <path d="M22 19.5A2.5 2.5 0 0 0 19.5 17H13v4h6.5a2.5 2.5 0 0 1 2.5 2.5z" />
      <path d="M11 4v17" />
      <path d="M13 4v17" />
      <path d="M4.5 5H11v12H4.5A2.5 2.5 0 0 0 2 19.5V7.5A2.5 2.5 0 0 1 4.5 5Z" />
      <path d="M19.5 5H13v12h6.5A2.5 2.5 0 0 1 22 19.5V7.5A2.5 2.5 0 0 0 19.5 5Z" />
    </IconBase>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </IconBase>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M10 17H6a2 2 0 0 1-2-2V7h10v10Z" />
      <path d="M14 10h4l3 3v4h-7Z" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </IconBase>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

function CartItemCard({ item }: { item: CartBook }) {
  return (
    <article className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 flex-1 gap-5">
          <div className="w-[118px] shrink-0 rounded-xl bg-zinc-100 p-3 shadow-[10px_12px_18px_rgba(15,23,42,0.08)]">
            <img
              alt={item.title}
              className="aspect-[4/5] w-full rounded-lg object-cover"
              src={item.image}
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
              <h2 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.35rem]">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 sm:text-base">
                {item.author}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <div className="flex items-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-lg text-slate-900">
                <span className="w-6 text-center">-</span>
                <span className="w-10 text-center">{item.quantity}</span>
                <span className="w-6 text-center">+</span>
              </div>

              <div className="inline-flex items-center gap-2 text-base text-zinc-700">
                <Trash2Icon className="h-4 w-4" />
                <span>Remove</span>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 text-left md:text-right">
          <p className="text-[1.15rem] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.3rem]">
            {formatPrice(item.price)}
          </p>
          <p className="mt-1 text-sm text-zinc-500">{item.format}</p>
        </div>
      </div>
    </article>
  );
}

export default function ShopCarPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <div className="grid gap-8 lg:grid-cols-12">
        <section className="lg:col-span-7 xl:col-span-8">
          <a
            href="/cliente/bookStore"
            className="inline-flex items-center gap-2 text-base text-zinc-600 transition hover:text-zinc-900"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Continue Browsing
          </a>

          <h1 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-[3.35rem]">
            Your Reading List
          </h1>

          <div className="mt-10 space-y-6">
            {cartItems.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}

            <div className="rounded-[1.75rem] border-2 border-dashed border-zinc-200 bg-[#FBFCFD] px-6 py-14 text-center shadow-sm">
              <div className="mx-auto flex w-fit flex-col items-center">
                <BookOpenIcon className="h-6 w-6 text-zinc-500" />
                <p className="mt-6 text-[1.05rem] text-zinc-500">
                  Looking for more? Check our{" "}
                  <span className="font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4">
                    new arrivals
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="rounded-[1.75rem] border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-slate-950">
              Order Summary
            </h2>

            <div className="mt-10 space-y-5 text-[1.05rem] text-zinc-700">
              <div className="flex items-center justify-between gap-4">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Estimated Tax</span>
                <span>{formatPrice(estimatedTax)}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
            </div>

            <div className="mt-5 border-t border-zinc-200 pt-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[1.75rem] font-semibold tracking-[-0.03em] text-slate-950">
                  Total
                </span>
                <span className="text-[1.75rem] font-semibold tracking-[-0.03em] text-slate-950">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-[1.05rem] text-zinc-700">Promo Code</p>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-2xl bg-zinc-100 px-6 py-4 text-[1.05rem] text-zinc-500">
                  LUMINA20
                </div>
                <div className="rounded-2xl bg-zinc-100 px-7 py-4 text-[1.05rem] font-medium text-slate-950">
                  Apply
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-3xl bg-slate-900 px-6 py-6 text-white shadow-[0_18px_28px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-center gap-3 text-[1.05rem] font-medium">
                <span>Proceed to Checkout</span>
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-16 space-y-5 text-[1.02rem] text-zinc-700">
              <div className="flex items-center gap-3">
                <LockIcon className="h-5 w-5 text-zinc-500" />
                <span>Secure encrypted checkout</span>
              </div>
              <div className="flex items-center gap-3">
                <TruckIcon className="h-5 w-5 text-zinc-500" />
                <span>Arrives in 2-3 business days</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import styles from "./page.module.css";

type BookCategory =
  | "Curated"
  | "Modernism"
  | "Classics"
  | "Photography"
  | "Architecture";

type BookItem = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: BookCategory;
  image: string;
};

const activeCategory: BookCategory = "Curated";

const categories: BookCategory[] = [
  "Curated",
  "Modernism",
  "Classics",
  "Photography",
  "Architecture",
];

const featuredBooks: BookItem[] = [
  {
    id: "bk-001",
    title: "Modernism & Beyond",
    author: "Julian Thorne",
    price: 24.95,
    category: "Modernism",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bk-002",
    title: "Chromatic Silence",
    author: "Marina Voss",
    price: 24.95,
    category: "Curated",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bk-003",
    title: "Echoes of the Past",
    author: "S. J. Marlo",
    price: 18.5,
    category: "Classics",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bk-004",
    title: "Whispering Woods",
    author: "Lydia Green",
    price: 21,
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bk-005",
    title: "Urban Geometry",
    author: "Marcus Reed",
    price: 29.99,
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { label: "New arrivals", value: "18" },
  { label: "Curated this week", value: "42" },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function BookStorePage() {
  return (
    <div className={styles.pageShell}>
      <section className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>Curated Selections</h1>
          <p className={styles.heroText}>
            Discover hand-picked masterpieces and contemporary classics,
            curated for the modern intellectual explorer.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {stats.map((item) => (
            <article key={item.label} className={styles.infoCard}>
              <p className={styles.infoLabel}>{item.label}</p>
              <p className={styles.infoValue}>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.toolbar}>
        <div className={styles.pillRow}>
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <div
                key={category}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {category}
              </div>
            );
          })}
        </div>

        <p className="text-sm font-medium text-zinc-500">
          Showing {featuredBooks.length} featured titles
        </p>
      </section>

      <section className={styles.grid}>
        {featuredBooks.map((book) => (
          <article key={book.id} className={styles.card}>
            <div className={styles.coverWrap}>
              <img
                alt={book.title}
                className={styles.coverImage}
                src={book.image}
              />
            </div>

            <p className={styles.price}>{formatPrice(book.price)}</p>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.author}>{book.author}</p>

            <div className={styles.button}>
              Add to cart
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

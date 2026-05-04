import Link from "next/link";
import styles from "./page.module.css";

const featuredCollections = [
  {
    title: "Codex Atlas",
    description: "Mapas de conocimiento, indices curados y relaciones entre obras clave.",
  },
  {
    title: "Lexicon Notes",
    description: "Fragmentos, citas y conceptos vivos para lectores, curadores y equipos editoriales.",
  },
  {
    title: "Archive Pulse",
    description: "Actividad reciente del catalogo, nuevas lecturas y rutas sugeridas dentro del sistema.",
  },
];

const quickAccess = [
  {
    title: "Inicia sesion",
    href: "/login",
    note: "Accede a tu biblioteca, progreso de lectura y panel personalizado.",
  },
  {
    title: "Registrate",
    href: "/register",
    note: "Crea tu acceso para entrar al ecosistema editorial de Lexicon.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className={styles.shell}>
        <header className="flex flex-col gap-6 border-b border-zinc-200/80 pb-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-bold tracking-[-0.03em] text-black sm:text-3xl">
              Lexicon
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              Biblioteca digital, curacion editorial y navegacion inteligente
              para experiencias de lectura mas claras.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-600">
            <a
              href="#colecciones"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-zinc-300 hover:text-black"
            >
              Colecciones
            </a>
            <a
              href="#accesos"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-zinc-300 hover:text-black"
            >
              Accesos
            </a>
          </nav>
        </header>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <article className="rounded-[2rem] border border-zinc-200/80 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.05)] sm:p-10">
            <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-600">
              Lexicon Hub
            </div>

            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#080b13] sm:text-5xl">
              Una vista principal mas clara para explorar conocimiento, lectura y curacion editorial.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600">
              Lexicon conecta catalogo, contexto y experiencia. Esta pagina
              principal funciona como punto de entrada para descubrir
              colecciones, iniciar sesion o crear tu acceso dentro de la
              biblioteca.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/login"
                className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Inicia sesion
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-white hover:text-black"
              >
                Registrate
              </Link>
            </div>
          </article>

          <aside className={`${styles.heroPanel} rounded-[2rem] border border-zinc-200/80 p-8 sm:p-10`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
                  Estado del sistema
                </p>
                <p className="mt-3 font-serif text-3xl font-semibold tracking-[-0.03em] text-black">
                  Lexicon Archive
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Activo
              </span>
            </div>

            <div className="mt-10 grid gap-4">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Lecturas vivas
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-black">
                  128
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  sesiones activas recorriendo catalogos y notas de lectura.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Curaciones
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-black">
                    32
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Nuevos indices
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-black">
                    14
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="colecciones"
          className="grid gap-4 border-t border-zinc-200/80 py-10 lg:grid-cols-3"
        >
          {featuredCollections.map((collection) => (
            <article
              key={collection.title}
              className="rounded-[1.75rem] border border-zinc-200/80 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.04)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Coleccion destacada
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.03em] text-black">
                {collection.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {collection.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="accesos"
          className="grid gap-4 border-t border-zinc-200/80 py-10 md:grid-cols-2"
        >
          {quickAccess.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.75rem] border border-zinc-200/80 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_34px_rgba(15,23,42,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Acceso rapido
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.03em] text-black">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{item.note}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

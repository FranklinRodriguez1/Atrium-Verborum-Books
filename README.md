This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database

The database is [Supabase](https://supabase.com) (hosted Postgres). The Supabase client setup lives in `app/api/supabase/`:

- `app/api/supabase/client.ts` — browser-safe client, uses the public anon key, subject to Row Level Security.
- `app/api/supabase/server.ts` — server-only client for Route Handlers, uses the service role key and bypasses RLS. Never import this from a Client Component.

The raw SQL schema lives separately at `supabase/schema.sql` (paste it into the Supabase Dashboard's SQL Editor on a fresh project). It defines 4 tables:

| Table | Purpose | Key relationships |
| --- | --- | --- |
| `profiles` | App-specific data per user (name, email, role, theme). `id` references Supabase's built-in `auth.users.id` — passwords and login are handled by Supabase Auth itself, not this table. | `id` → `auth.users.id` |
| `books` | The catalog. | — |
| `orders` | One row per order (header). | `user_id` → `profiles.id` |
| `order_items` | Pivot table resolving the many-to-many between `orders` and `books`, one row per line item, with `precio_unitario` frozen at purchase time. | `order_id` → `orders.id`, `book_id` → `books.id` |

`schema.sql` also enables Row Level Security on all four tables with a baseline policy set (owners can read/write their own profile and orders; the catalog is publicly readable; privileged writes go through the service-role server client). Refine these once admin/librarian roles are fully wired to Supabase Auth.

Required environment variables (see `.env`, get the values from your Supabase project's Settings > API page):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, never expose to the browser)

Prisma (`prisma/schema.prisma`) is scaffolded but not yet connected to this schema — that wiring is a separate next step.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

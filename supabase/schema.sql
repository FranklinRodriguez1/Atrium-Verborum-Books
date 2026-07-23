-- ============================================================
-- Atrium Verborum Books — Supabase schema
--
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- against a fresh project. auth.users is Supabase's built-in
-- table and already exists — profiles just extends it.
-- ============================================================

-- ------------------------------------------------------------
-- 1. profiles — app-specific data for each auth.users row
-- ------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nombre text not null,
  email text not null,
  role text not null default 'cliente' check (role in ('cliente', 'admin')),
  theme_preference text not null default 'light' check (theme_preference in ('light', 'dark')),
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 2. books — the catalog
-- ------------------------------------------------------------
create table public.books (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  autor text not null,
  precio numeric(10, 2) not null check (precio >= 0),
  stock integer not null default 0 check (stock >= 0),
  imagen_url text,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 3. orders — one row per order, belongs to one profile
-- ------------------------------------------------------------
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  total numeric(10, 2) not null default 0 check (total >= 0),
  estado text not null default 'pendiente' check (estado in ('pendiente', 'pagado', 'enviado', 'cancelado')),
  created_at timestamptz not null default now()
);

create index orders_user_id_idx on public.orders (user_id);

-- ------------------------------------------------------------
-- 4. order_items — pivot table: many-to-many between orders and books
-- ------------------------------------------------------------
create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  book_id uuid not null references public.books (id) on delete restrict,
  cantidad integer not null check (cantidad > 0),
  precio_unitario numeric(10, 2) not null check (precio_unitario >= 0)
);

create index order_items_order_id_idx on public.order_items (order_id);
create index order_items_book_id_idx on public.order_items (book_id);

-- ============================================================
-- Row Level Security
--
-- Baseline policies only: readers can see the catalog and manage
-- their own profile/orders. Writes to books/orders/order_items from
-- the app go through the service-role server client (app/api/supabase/server.ts),
-- which bypasses RLS entirely — refine these once admin/librarian
-- checks are wired to real Supabase auth roles.
-- ============================================================

alter table public.profiles enable row level security;
alter table public.books enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- profiles: a user can read and update only their own profile
create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Profiles are updatable by owner"
  on public.profiles for update
  using (auth.uid() = id);

-- books: catalog is public read; writes are service-role only (no policy needed)
create policy "Books are viewable by everyone"
  on public.books for select
  using (true);

-- orders: a user can read and create only their own orders
create policy "Orders are viewable by owner"
  on public.orders for select
  using (auth.uid() = user_id);

create policy "Orders are insertable by owner"
  on public.orders for insert
  with check (auth.uid() = user_id);

-- order_items: viewable if you own the parent order
create policy "Order items are viewable by order owner"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders
      where orders.id = order_items.order_id
        and orders.user_id = auth.uid()
    )
  );

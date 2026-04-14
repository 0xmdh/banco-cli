-- Contact form rows (written only via Vercel API + service role key)
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  role text not null,
  message text
);

comment on table public.contact_submissions is 'Landing form leads; insert via server only.';

alter table public.contact_submissions enable row level security;

-- No policies for anon/authenticated: only the service_role key (Vercel) bypasses RLS for inserts.

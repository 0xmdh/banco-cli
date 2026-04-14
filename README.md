# rootstock-institutional

Proposal landing and deliverables for **Rootstock CLI Agent x Wake Up Labs**.

## Site structure (two audiences, separate pages)

| Path | Audience |
|------|-----------|
| **`/`** ([`index.html`](index.html) or [`web/index.html`](web/index.html)) | **Institutional** — vault funnel, compliance-oriented CLI agent concept |
| **`/retail/`** ([`retail/index.html`](retail/index.html)) | **Retail & ecosystem** — wallets, bridges, explorer, dApps, activation KPIs |

Headers link across the two experiences so they are never mixed in one scroll. Optional hub (two cards) can be added later; today cross-navigation is enough.

## Stack

| Piece | Role |
|--------|------|
| **Vercel** | Hosts `web/` (static site + `/api/contact` serverless) |
| **Cloudflare** | DNS (and optional proxy/WAF) for `rootstock.wup.ar` → Vercel |
| **Supabase** | Postgres table `contact_submissions`; API inserts via **service_role** on Vercel only |

Details: [`docs/cloudflare-vercel.md`](docs/cloudflare-vercel.md), [`supabase/README.md`](supabase/README.md).

## Deploy (Vercel)

1. Push **`main`** to your Git remote.
2. New Vercel project → import repo → set **Root Directory** to **`web`**.
3. Add env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.
4. Run Supabase migration (see `supabase/migrations/`) or `supabase db push`.
5. In Vercel, add custom domain **`rootstock.wup.ar`** (and DNS en Cloudflare según lo que indique Vercel).
6. In **Cloudflare**, CNAME that hostname to the target Vercel shows (often `cname.vercel-dns.com`). Use **SSL: Full (strict)** when the cert is active on Vercel.

## Local env (optional)

Copy [`.env.example`](.env.example) to `web/.env.local` when using `vercel dev` (Vercel loads it for serverless).

## CTAs

- **Book strategy call** → [https://zcal.co/wakeuplabs](https://zcal.co/wakeuplabs)

## Repo layout

- [`web/`](web/) — production site + API
- [`supabase/`](supabase/) — SQL migrations
- [`deliverables/`](deliverables/) — messaging, copy, pilot notes
- [`docs/`](docs/) — infra notes

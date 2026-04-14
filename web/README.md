# Rootstock CL Agent x Wake Up Labs — Web (Vercel)

This folder is the **Vercel project root**: set **Root Directory** to `web` in the Vercel dashboard (or connect only this path in a monorepo).

## Files

- `index.html`, `styles.css`, `app.js` — landing UI
- `api/contact.js` — serverless handler: writes form submissions to Supabase (`contact_submissions`)
- `package.json` — dependency for `@supabase/supabase-js` (used only by the API route)

## Environment (Vercel)

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | **service_role** key (server only) |

See [`../supabase/README.md`](../supabase/README.md) for migrations.

## Local preview

**Static only** (no `/api/contact`):

```bash
cd web && python3 -m http.server 8080
```

**With API** (needs Vercel CLI + env):

```bash
cd web && npm install && npx vercel dev
```

## Form behavior

1. `POST /api/contact` with JSON → inserts into Supabase when env vars are set.
2. If the request fails or Supabase is not configured, the client falls back to **mailto** `hello@wakeuplabs.io`.

## Design parity

Aligned to [Rootstock institutional](https://www.rootstocklabs.com/institutional/): Rootstock Sans from their CDN, cream background, pill buttons, spacing rhythm.

## Cloudflare

DNS / SSL in front of Vercel: [`../docs/cloudflare-vercel.md`](../docs/cloudflare-vercel.md).

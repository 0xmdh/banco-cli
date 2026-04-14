# Supabase

## Apply migrations

From the repo root (with [Supabase CLI](https://supabase.com/docs/guides/cli) installed):

```bash
supabase link --project-ref <YOUR_PROJECT_REF>
supabase db push
```

Or run the SQL in `migrations/` from the Supabase SQL editor.

## Vercel environment variables

Set in the Vercel project (**Settings → Environment Variables**):

| Name | Value |
|------|--------|
| `SUPABASE_URL` | Project URL (Settings → API) |
| `SUPABASE_SERVICE_ROLE_KEY` | **service_role** secret (server only; never expose to the browser) |

The landing form POSTs to `/api/contact`, which uses these variables server-side.

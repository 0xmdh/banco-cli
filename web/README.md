# Banco CLI × Wake Up Labs — Web (Vercel)

Esta carpeta es la **raíz del proyecto en Vercel**: configurá **Root Directory** = `web`.

**Producción:** `https://banco.wup.ar`

## Rutas

- **`/`** — `index.html` (landing bancos)
- **`/retail/`** — `retail/index.html` (enlace al inicio)

## Archivos

- `index.html`, `styles.css`, `app.js` — UI
- `api/contact.js` — serverless: inserta en Supabase (`contact_submissions`)
- `package.json` — dependencia `@supabase/supabase-js` (solo la API)

## Variables (Vercel)

| Variable | Descripción |
|----------|-------------|
| `SUPABASE_URL` | URL del proyecto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | clave **service_role** (solo servidor) |

Ver [`../supabase/README.md`](../supabase/README.md).

## Local

Solo estático:

```bash
cd web && python3 -m http.server 8080
```

Con API:

```bash
cd web && npm install && npx vercel dev
```

## DNS / SSL

[`../docs/cloudflare-vercel.md`](../docs/cloudflare-vercel.md)

# Banco CLI (Wake Up Labs)

**Repositorio:** [github.com/0xmdh/banco-cli](https://github.com/0xmdh/banco-cli)

Landing y API de contacto para la propuesta **Banco CLI × Wake Up Labs** (banca personas y empresas).

**Producción:** `https://banco.wup.ar` (dominio en Vercel + DNS en Cloudflare).

## Estructura del sitio

| Ruta | Contenido |
|------|------------|
| **`/`** | Landing principal (`index.html` o `web/index.html`) |
| **`/retail/`** | Página mínima con enlace al inicio (`retail/index.html`) |

## Stack

| Pieza | Rol |
|--------|-----|
| **Vercel** | Hostea `web/` (estático + `POST /api/contact`) |
| **Cloudflare** | DNS para `banco.wup.ar` → Vercel |
| **Supabase** | Tabla `contact_submissions`; la API usa **service_role** solo en servidor |

Detalle: [`docs/cloudflare-vercel.md`](docs/cloudflare-vercel.md), [`supabase/README.md`](supabase/README.md).

## Deploy (proyecto nuevo en Vercel)

1. **Vercel** → *Add New* → *Project* → importá este repo.
2. **Root Directory:** `web` (importante).
3. **Environment variables:** `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (mismo esquema que otros sitios si compartís proyecto Supabase).
4. **Deploy**; cuando esté verde, **Settings → Domains** → agregar **`banco.wup.ar`**.
5. **Cloudflare** (zona `wup.ar`): registro **CNAME** `banco` → destino que indique Vercel (típico `cname.vercel-dns.com`). SSL **Full (strict)** cuando el certificado en Vercel esté listo.

Entorno local con API: copiá [`.env.example`](.env.example) a `web/.env.local` y `cd web && npm install && npx vercel dev`.

## Repo

- [`web/`](web/) — sitio y API que despliega Vercel
- [`supabase/`](supabase/) — migraciones SQL
- [`docs/`](docs/) — infra

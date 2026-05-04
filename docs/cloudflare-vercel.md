# Cloudflare + Vercel

Use **Cloudflare DNS** (and optional proxy) in front of **Vercel** hosting.

## Static routes

Desde la raíz del deploy (`web/` en Vercel):

- **`/`** — landing Banco CLI × Wake Up Labs (propuesta bancos, personas y empresas)
- **`/retail/`** — redirección / aviso hacia el contenido unificado en `/`

`POST /api/contact` queda en la raíz del sitio y sirve para el formulario de la landing.

## DNS (producción `banco.wup.ar`)

1. En **Vercel**: proyecto con **Root Directory** = `web` → **Settings → Domains** → agregar `banco.wup.ar` y seguir lo que indique Vercel.
2. En **Cloudflare** (zona `wup.ar`):
   - **CNAME** nombre `banco` → el host que muestre Vercel (suele ser `cname.vercel-dns.com` o un target específico del proyecto).

Si ya existe otro subdominio apuntando a otro proyecto, cada hostname va al **proyecto Vercel** donde lo agregaste; no hace falta tocar los demás.

## SSL / TLS

- Cloudflare **SSL/TLS**: **Full (strict)** cuando Vercel ya emitió certificado para `banco.wup.ar`.

## Proxy (nube naranja)

- **Proxied**: CDN/WAF de Cloudflare; revisá que no bloquee `POST /api/contact`.
- **DNS only**: tráfico directo a Vercel; más simple para depurar.

## Opcional

- **WAF / rate limit** en `POST /api/contact` frente a abuso.
- **Reglas de caché**: no cachear `/api/*` si necesitás comportamiento siempre dinámico.

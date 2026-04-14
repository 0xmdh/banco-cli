# Cloudflare + Vercel

Use **Cloudflare DNS** (and optional proxy) in front of **Vercel** hosting.

## DNS

1. In Vercel: add the custom domain (e.g. `rootstock.wakeuplabs.io`) and follow Vercel’s instructions.
2. In Cloudflare **DNS** for the zone:
   - **CNAME** `rootstock` → `cname.vercel-dns.com` (or the hostname Vercel shows).
   - If you use the apex domain, use the **A** / **ALIAS** pattern Vercel documents for apex.

## SSL / TLS

- Cloudflare **SSL/TLS** mode: **Full (strict)** is typical when Vercel serves a valid certificate for your hostname.
- If the hostname is a subdomain only on Vercel, ensure the certificate is issued in Vercel before enabling strict mode.

## Proxy (orange cloud)

- **Proxied**: Cloudflare CDN/WAF applies; ensure no conflicting rules block `POST /api/contact`.
- **DNS only**: traffic goes straight to Vercel; simpler debugging.

## Optional

- **WAF / Rate limiting** on `POST /api/contact` to reduce abuse.
- **Cache rules**: do not cache ` /api/*` or HTML if you need fresh dynamic behavior.

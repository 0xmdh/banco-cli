# Rootstock CL Agent x Wake Up Labs — Landing

## Files

- `index.html` — landing content and structure
- `styles.css` — visual system aligned to [Rootstock institutional](https://www.rootstocklabs.com/institutional/) (cream `#fafaf5`, ink `#000` / `#121212`, **Rootstock Sans** loaded from `rootstocklabs.com`), plus an optional **Night** theme
- `app.js` — theme persistence, terminal copy, editable snippet persistence, contact form → mailto

## Design parity

- **Typography:** `@font-face` for **Rootstock Sans** (weights 400 / 500 / 700) uses the same WOFF2/WOFF URLs as the live site (`/fonts/Rootstock-Sans-*.woff2`).
- **Layout:** Container max-width **1440px** and horizontal padding **16px → 40px (md) → 60px (xl)** to mirror the published stylesheet rhythm.
- **UI:** Pill buttons (~**40px** radius), offset shadow **3px 4px 0 #73736f**, form inputs **34px** radius and **#faf8f7** fill (as on their HubSpot-style forms).

## Features

- **Book strategy call** opens [https://zcal.co/wakeuplabs](https://zcal.co/wakeuplabs) in a new tab.
- **Day / Night:** Toggle in the header. Preference is stored in `localStorage` under `rootstock-theme`. **Day** matches the institutional cream/light look; **Night** is a dark inversion using the same font stack. First visit defaults to **Day** (light).
- **Interactive terminals:** Hero, three “launch flow” steps, and “flow status” blocks use `contenteditable` bodies. Edits are saved per snippet in `localStorage` as `rootstock-snippet-<id>`.
- **Copy:** Each terminal and the topology block have a **Copy** button (uses the Clipboard API with a fallback).

## Quick local preview

From this folder:

```bash
python3 -m http.server 8080
```

Open:

`http://localhost:8080`

## Manual QA checklist

- **Fonts:** If Rootstock Sans does not load (network or CORS), the page falls back to Arial; copy the font files into `landing/fonts/` and point `@font-face` URLs there if needed for self-hosted deploys.
- Toggle **Day** / **Night**; reload — theme should persist.
- Edit a terminal snippet; reload — text should persist.
- **Copy** shows “Copied” and places text on the clipboard.
- Resize to mobile width: hero stacks, command rows stack, nav wraps.
- Submit the contact form — should open the default mail client with a prefilled message to `hello@wakeuplabs.io`.

## Deployment

**Subdomain:** `rootstock.wakeuplabs.io` — publish the `landing/` directory as the site root.

### Netlify (recommended with repo root)

This repo includes [`netlify.toml`](../netlify.toml) with `publish = "landing"`. Connect the Git repo, set the production branch to **`main`**, and assign the custom domain `rootstock.wakeuplabs.io` in Netlify DNS / domain settings.

### Vercel

Create a project from this repo and set **Root Directory** to `landing`. Add the custom domain `rootstock.wakeuplabs.io`.

### Git (push to `main`)

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Note

Commands and JSON in the page are **illustrative** for the proposal demo, as stated in the footer.

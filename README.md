# rootstock-institutional

Proposal landing and deliverables for **Rootstock CL Agent x Wake Up Labs**.

## Production (`rootstock.wakeuplabs.io`)

1. Create a remote repository and push **`main`**:

```bash
git remote add origin <YOUR_GIT_URL>
git push -u origin main
```

2. In **Netlify**, “Add new site” → import the repo. The included [`netlify.toml`](netlify.toml) sets **`publish = "landing"`** so the site is served from that folder.

3. In Netlify **Domain management**, add **`rootstock.wakeuplabs.io`** and follow DNS instructions (often a CNAME to the Netlify target).

**Vercel:** new project from the same repo, set **Root Directory** to `landing`, then attach the custom domain.

## CTAs

- **Book strategy call** → [https://zcal.co/wakeuplabs](https://zcal.co/wakeuplabs) (opens in a new tab).

## Content

- [`landing/`](landing/) — static site (HTML/CSS/JS).
- [`deliverables/`](deliverables/) — messaging, copy, pilot notes.

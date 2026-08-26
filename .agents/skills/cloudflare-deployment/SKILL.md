---
name: cloudflare-deployment
description: Procedure for deploying Astro CMS and Design System Showcase to Cloudflare Pages using Wrangler CLI and environment secret configurations.
---

# Cloudflare Deployment Skill

Follow these steps to deploy applications in this monorepo to Cloudflare Pages.

> [!IMPORTANT]
> **Deploy ONLY when explicitly requested.** Run this procedure exclusively when the user asks to deploy. Never deploy, upload with wrangler, or `git commit` as part of any other task (copywriting, design system work, CMS edits…). The default for any change is the local dev server with hot reload — no build/check needed unless deploying:
> - CMS: `bun run dev` → http://localhost:4321
> - Design system docs: `bun run dev:docs` → http://localhost:4322
>
> If the user did not explicitly say **"deploy"** or **"commit"**, do nothing beyond applying the change; no build/check required.

---

## 🔐 Environment Variables & Secrets Setup

1. Check for `.env` in `apps/cms` or project root.
2. Ensure the following Cloudflare credentials exist in `.env`:
   ```ini
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   CLOUDFLARE_API_TOKEN=your_api_token
   CLOUDFLARE_PROJECT_NAME=partido-sintetico-cms
   ```

---

## 🚀 Deployment Procedure

### 1. Build Verification
Use the `build-validation` skill (run `bun run check` and `ASTRO_TELEMETRY_DISABLED=1 bun run build`). This only happens at deploy time, never for routine edits.

### 2. Deploy `apps/cms` to Cloudflare Pages

```bash
bun run --cwd apps/cms x wrangler pages deploy dist --project-name=partido-sintetico-cms
```

### 3. Deploy `apps/design-system-docs` to Cloudflare Pages

```bash
bun run --cwd apps/design-system-docs x wrangler pages deploy dist --project-name=partido-sintetico-docs
```

---

## 🔍 Post-Deployment Verification
1. Inspect deployment URL returned by Wrangler CLI.
2. Verify static routes, CSS styling, and edge response headers.

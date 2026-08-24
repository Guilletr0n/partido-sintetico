---
name: cloudflare-deployment
description: Procedure for deploying Astro CMS and Design System Showcase to Cloudflare Pages using Wrangler CLI and environment secret configurations.
---

# Cloudflare Deployment Skill

Follow these steps to deploy applications in this monorepo to Cloudflare Pages:

---

## 🔐 Environment Variables & Secrets Setup

1. Check for `.env.example` in `apps/cms` or project root.
2. Ensure the following Cloudflare credentials exist in `.env`:
   ```ini
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   CLOUDFLARE_API_TOKEN=your_api_token
   CLOUDFLARE_PROJECT_NAME=partido-sintetico-cms
   ```

---

## 🚀 Deployment Procedure

### 1. Build Verification
Run monorepo checks and production build:

```bash
bun run check
ASTRO_TELEMETRY_DISABLED=1 bun run build
```

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

---
trigger: model_decision
description: When the task is related to deployments o cloudflare
---

# DevOps & Cloudflare Deployment Rules

Find manuals about deploying an astro site in "https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/"

When configuring deployments or infrastructure in `apps/cms` or `apps/design-system-docs`:

1. **Security & Environment Variables**:
   - Never commit sensitive API tokens or secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) to version control.
   - Use `.env.example` for public template keys and `.env` for local secrets. `.env` MUST be listed in `.gitignore`.
2. **Cloudflare Pages Compatibility**:
   - Use `bun run build` to generate static production assets in `dist/`.
   - For SSR routes, configure `@astrojs/cloudflare` with edge runtime context.
3. **Wrangler Configuration**:
   - Place Wrangler configuration (`wrangler.json` / `wrangler.toml`) in application roots when deploying via Wrangler CLI.
4. **Pre-deployment Check**:
   - Always run `bun run check` and `bun run build` before pushing or deploying to production.


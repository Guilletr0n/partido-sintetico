---
name: cloudflare-cli-deployment
description: Comprehensive guide teaching the agent how to use Cloudflare CLI (Wrangler) to deploy Astro CMS and Design System Showcase apps using API keys stored in .env.
---

# Cloudflare CLI Deployment Skill

This skill provides complete operational knowledge for the **DevOps Agent** (`devops-deploy-agent`) to interact with Cloudflare CLI (`bunx wrangler`), Cloudflare Pages, Cloudflare Workers, and environment secrets for deploying applications in this monorepo.

---

## 🔑 Environment Credentials & API Key Loading

Cloudflare CLI (`wrangler`) automatically reads API tokens from environment variables stored in `.env`:

```ini
# .env file at monorepo root
CLOUDFLARE_ACCOUNT_ID="your_account_id_here"
CLOUDFLARE_API_TOKEN="your_api_token_here"
CLOUDFLARE_PAGES_CMS_PROJECT="partido-sintetico-cms"
CLOUDFLARE_PAGES_DOCS_PROJECT="partido-sintetico-docs"
```

### Loading `.env` in Shell Operations:
When running Cloudflare CLI commands via `bunx wrangler`, export credentials from `.env`:

```bash
export $(grep -v '^#' .env | xargs)
bunx wrangler pages project list
```

---

## ☁️ Cloudflare CLI (`wrangler`) Operational Commands

### 1. Cloudflare Pages Project Management
- **List Projects**:
  ```bash
  export $(grep -v '^#' .env | xargs)
  bunx wrangler pages project list
  ```
- **Create New Pages Project**:
  ```bash
  export $(grep -v '^#' .env | xargs)
  bunx wrangler pages project create partido-sintetico-cms --production-branch=main
  ```

### 2. Deploying Monorepo Target Applications

#### A. Deploy Astro CMS (`apps/cms`)
```bash
# Step 1: Build production static bundle for CMS
ASTRO_TELEMETRY_DISABLED=1 bun run --cwd apps/cms build

# Step 2: Deploy dist directory to Cloudflare Pages
export $(grep -v '^#' .env | xargs)
bunx wrangler pages deploy apps/cms/dist --project-name=partido-sintetico-cms --branch=main
```

#### B. Deploy Design System Showcase (`apps/design-system-docs`)
```bash
# Step 1: Build production bundle for Showcase App
ASTRO_TELEMETRY_DISABLED=1 bun run --cwd apps/design-system-docs build

# Step 2: Deploy dist directory to Cloudflare Pages
export $(grep -v '^#' .env | xargs)
bunx wrangler pages deploy apps/design-system-docs/dist --project-name=partido-sintetico-docs --branch=main
```

### 3. Managing Environment Secrets on Cloudflare Pages
To inject production secrets into Cloudflare Pages without committing them to Git:

```bash
export $(grep -v '^#' .env | xargs)
echo "secret_value" | bunx wrangler pages secret put SECRET_KEY_NAME --project-name=partido-sintetico-cms
```

### 4. Local Cloudflare Pages Preview (`wrangler pages dev`)
To test how Cloudflare edge routing renders static pages locally:

```bash
bunx wrangler pages dev apps/cms/dist --port 8788
```

---

## 🛡 Best Practices & Safety

1. **Pre-flight Check**: Always run `bun run check` and `bun run build` before triggering deployment commands.
2. **Never Commit Secrets**: Ensure `.env` is listed in `.gitignore` and never committed to Git repository.
3. **Verification**: After deployment completes, verify HTTP status, custom domain routing, and dark theme CSS rendering on the generated deployment URL.

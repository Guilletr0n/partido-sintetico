---
name: vercel-cli-deployment
description: Operational guide teaching the agent how to use Vercel CLI to deploy Astro CMS and Design System Showcase applications.
---

# Vercel CLI Deployment Skill

This skill provides operational procedures for deploying applications in this monorepo using the **Vercel CLI** (`bunx vercel`).

---

## 🔺 Vercel CLI Commands

### 1. Preview Deployment
To trigger a preview build for testing:

```bash
# Deploy preview for Astro CMS
bunx vercel --cwd apps/cms

# Deploy preview for Design System Showcase
bunx vercel --cwd apps/design-system-docs
```

### 2. Production Deployment
To trigger a production deployment to Vercel:

```bash
# Deploy production build for Astro CMS
bunx vercel --cwd apps/cms --prod

# Deploy production build for Design System Showcase
bunx vercel --cwd apps/design-system-docs --prod
```

### 3. Environment Variables on Vercel
To add environment variables using Vercel CLI:

```bash
bunx vercel env add VARIABLE_NAME production --cwd apps/cms
```

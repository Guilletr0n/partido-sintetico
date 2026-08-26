---
name: build-validation
description: "Runs type checks and production builds in the monorepo (bun run check / build). Use ONLY when explicitly requested (deploy or verification) or for risky changes such as dependency or build-config modifications. Do NOT run for routine content or UI edits — the dev server hot-reloads them and the user previews live."
---

# Build & Validation Skill (Bun)

## When to use it (only when needed)

Run validation ONLY in these cases:

1. **Deploy**: the user explicitly asked to deploy (check + build are part of the deployment procedure).
2. **Explicit request**: the user asked to "verify", "check", "run tests", etc.
3. **Risky change** (agent judgment): dependency changes, `astro.config`, integrations, package structure — cases where a silent failure could break the build.

Do **NOT** run it for routine content or component edits (copy tweaks, `.astro` text changes, new components): the dev server (`bun run dev` / `bun run dev:docs`) hot-reloads and the user previews live in the browser. A "comma change" never needs a build.

## Commands

- Full type check:
  `bun run check` (root) — or per app: `bun run --cwd apps/cms check`, `bun run --cwd apps/design-system-docs check`
- Production build:
  `ASTRO_TELEMETRY_DISABLED=1 bun run build` (root) — or per app:
  `ASTRO_TELEMETRY_DISABLED=1 bun run --cwd apps/cms build`
- Design system: `bun run --cwd packages/design-system build` (runs `astro check`)
- Docs app: `bun run --cwd apps/design-system-docs build`

Start targeted (the changed app) and broaden only as needed.

## Sandbox environment notes

- **Installing dependencies** (bun cache cannot write to the sandbox tempdir):
  `BUN_INSTALL_CACHE_DIR="<project>/.bun-cache" bun install` (needs network to `registry.npmjs.org`).
- **esbuild SIGKILL**: if the build fails with `The service was stopped` / `Killed: 9` from `node_modules/astro/node_modules/esbuild`, the nested binary is corrupt. Reinstall it:
  `rm -rf node_modules/astro/node_modules/esbuild` then `BUN_INSTALL_CACHE_DIR="<project>/.bun-cache" bun install`.
- **Stale vite cache** after config/dependency changes: remove `node_modules/.vite` and `apps/*/node_modules/.vite` and retry.
- **`@astrojs/mdx` versions**: this repo uses Astro 4 — use `@astrojs/mdx@^3` (v4+ requires Astro 5).

## Golden rule

After validating, do **not** commit or deploy: report the result and point to the local preview (`bun run dev` → http://localhost:4321, `bun run dev:docs` → http://localhost:4322).

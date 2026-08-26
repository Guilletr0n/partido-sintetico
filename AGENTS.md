# Project Instructions — Partido Sintético Español

## No automatic commits or deployments

- **Never `git commit`** unless the user explicitly asks you to commit.
- **Never deploy** to Cloudflare Pages (or anywhere else) unless the user explicitly asks you to deploy. The deployment skills exist for that purpose and only run on explicit request.
- **Default workflow after any change:** no build, check, commit or deploy. Apply the change and let the user preview it live in the dev server (hot reload on browser reload):
  - CMS: `bun run dev` → http://localhost:4321
  - Design system docs: `bun run dev:docs` → http://localhost:4322
- Run `bun run check` / `bun run build` **only** when the user explicitly asks to deploy or asks to verify the build — use the `build-validation` skill for that.
- If the user did not explicitly say **"deploy"** or **"commit"**, do nothing beyond applying the change and pointing to the preview URL.

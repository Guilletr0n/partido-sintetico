---
name: design-system-workflow
description: Step-by-step procedure to add, test, and export a new UI component in the design system package.
---

# Design System Component Workflow (Bun)

Follow these steps when creating or updating UI components:

> [!IMPORTANT]
> **No automatic commit, deploy or build.** Component work ends when the change is applied; the user previews it live in the dev server (hot reload). Never `git commit`, deploy, or run check/build unless the user explicitly asks.

1. **Tokens Check**: Verify whether new color, spacing, or font values belong in `packages/design-system/src/tokens/index.ts`.
2. **Create Component**: Place the `.astro` or framework component in `packages/design-system/src/components/<ComponentName>.astro`.
3. **Prop Definitions**: Declare an explicit `interface Props` with TypeScript types and JSDoc annotations.
4. **Export Manifest**: Add the component export to `packages/design-system/src/index.ts`.
5. **Verification**: Not required for regular edits — the user sees changes live in `bun run dev:docs` → http://localhost:4322. Run `bun run --cwd packages/design-system build` or `bun run check` only when the user asks to deploy or explicitly asks to verify.

# Partido Sintético Español — Astro CMS & Design System Monorepo

A modern, high-performance monorepo architecture built with **Astro** and **Bun** workspaces, featuring an isolated UI Design System, a standalone component showcase app, and an Astro-powered Content Management System (CMS).

---

## 🏗 Monorepo Structure

```text
partido_sintetico/
├── apps/
│   ├── cms/                        # Main Astro CMS Web Application (Port 4321)
│   │   ├── src/content/            # Astro Content Layer & Zod Schemas
│   │   ├── src/layouts/            # Astro Page Layouts
│   │   └── src/pages/              # Dynamic Page Routes (/ & /posts/[...slug])
│   │
│   └── design-system-docs/         # Standalone Design System Showcase App (Port 4322)
│       ├── src/pages/index.astro   # Component Registry & Overview
│       ├── src/pages/tokens.astro  # Design Tokens Visual Explorer
│       └── src/pages/components/   # Isolated Component Workbenches
│
├── packages/
│   └── design-system/              # Shared UI Component Library (@repo/design-system)
│       ├── src/tokens/             # Design Tokens (Colors, Typography, Spacing, Radii)
│       ├── src/specs/              # Declarative Component Visual Specifications
│       └── src/components/         # Reusable Astro UI Components (Button, Card, Hero, etc.)
│
└── .agents/                        # Specialized AI Agent Rules & Skills
    ├── rules/                      # Contextual Agent Guidelines
    └── skills/                     # Procedural Workflows (e.g., extract-web-design-system)
```

---

## 🚀 Prerequisites

Ensure you have **[Bun](https://bun.sh)** installed on your system:

```bash
bun --version # Recommended: >= 1.2.0
```

---

## 🛠 Getting Started

### 1. Install Dependencies

Install all monorepo dependencies across `apps/*` and `packages/*`:

```bash
bun install
```

### 2. Local Development Servers

You can launch the applications independently or concurrently:

#### 🟢 Run Main Astro CMS Site (`http://localhost:4321`)

```bash
bun run dev
# or
bun run dev:cms
```

#### 🟣 Run Isolated Design System Showcase (`http://localhost:4322`)

```bash
bun run dev:docs
```

> **Note**: The Design System Showcase runs on `http://localhost:4322` and provides an isolated workbench to inspect visual tokens, color swatches, and UI components independently from the main CMS site.

---

## 🧰 Available NPM / Bun Scripts

Execute these scripts from the monorepo root:

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the Astro CMS development server (`http://localhost:4321`) |
| `bun run dev:cms` | Alias for launching the CMS development server |
| `bun run dev:docs` | Starts the Design System Showcase development server (`http://localhost:4322`) |
| `bun run build` | Builds `@repo/design-system`, `apps/cms`, and `apps/design-system-docs` for production |
| `bun run check` | Runs `astro check` across all workspace projects to verify TypeScript types |
| `bun run clean` | Removes all `node_modules` and build lockfiles across the monorepo |

---

## 🎨 Design System & Forced Dark Mode

The project features an isolated design system in `packages/design-system`:

- **Design Tokens**: Defined in [`packages/design-system/src/tokens/index.ts`](file:///packages/design-system/src/tokens/index.ts).
- **Forced Dark Theme**: The design system locks canvas backgrounds (`#09090b` / dark charcoal) and light text (`#f4f4f5` / `#a1a1aa`) unconditionally across all devices.
- **Component Specs**: Component variant contracts defined in [`packages/design-system/src/specs/index.ts`](file:///packages/design-system/src/specs/index.ts).

---

## 🤖 Agent Workflows & Skills

This repository includes custom agent configurations in `.agents/`:

- **`design-spec-agent`**: Specialist in visual tokens, color schemes, and component spec contracts.
- **`design-system-agent`**: Specialist in implementing isolated `.astro` UI components.
- **`cms-core-agent`**: Specialist in Astro Content Layer schemas and Zod validation.
- **`astro-web-agent`**: Specialist in Astro layout templates and dynamic routing.
- **`extract-web-design-system` Skill**: Procedural workflow ([`.agents/skills/extract-web-design-system/SKILL.md`](file:///.agents/skills/extract-web-design-system/SKILL.md)) for extracting visual styles from reference websites.

---

## ☁️ Deployment

For terminal deployment to **Cloudflare Pages** via Wrangler CLI:
- 📖 See [Cloudflare Deployment Guide](docs/CLOUDFLARE_DEPLOYMENT.md).

---

## 📄 License

Private repository for Partido Sintético Español.

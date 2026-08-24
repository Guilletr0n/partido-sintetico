---
name: extract-web-design-system
description: Instructs the agent to visit a target website (default: https://www.langchain.com), extract its visual styles, color tokens, typography scales, and component aesthetics, and update the project's design system tokens and component styling. Enforces forced dark mode and light text regardless of user OS preferences.
---

# Extract Web Design System Skill

Use this skill when you want the design system to adopt the visual look and feel, color palette, typography, and component styling of a target reference website.

---

## 🎯 Target Website Configuration

> **Target URL**: `https://www.langchain.com`
> *(To change the target website in the future, edit the URL above.)*

---

## ⚠️ Mandatory Theme Constraints

> [!IMPORTANT]
> **FORCED DARK MODE & LIGHT TEXT RULE**:
> - **Background**: The design system canvas and surfaces MUST ALWAYS be dark (`#09090b` / dark charcoal) regardless of user OS color-scheme preferences (`prefers-color-scheme`).
> - **Text Color**: All body and heading typography MUST ALWAYS be light-colored (`#f4f4f5` primary text, `#a1a1aa` light gray secondary text).
> - **No Light Mode Fallback**: Do not generate light mode style overrides. The UI must remain strictly dark-themed across all devices and OS settings.

---

## 📋 Step-by-Step Extraction & Application Procedure

### Step 1: Inspect Target Site Styles
1. Fetch and read the target website content using `read_url_content` for the target URL above.
2. Analyze the visual identity and brand attributes:
   - **Background & Surfaces**: Dominant background color (e.g. dark charcoal `#09090b`), card surface tones, and header bar fills.
   - **Primary & Accent Colors**: Core brand color (e.g. LangChain Emerald/Green `#10b981`), secondary accent, hover states, and badge highlight colors.
   - **Text & Contrast**: High-contrast light heading text (`#f4f4f5`), light gray secondary text (`#a1a1aa`).
   - **Borders & Radii**: Border colors (e.g. `#27272a`), border width, corner radii (`0.5rem`, `0.75rem`, `full`).
   - **Typography**: Primary sans-serif font family, monospace font, heading weights, and size scale.

---

### Step 2: Apply Extracted Tokens to Design System
Update [packages/design-system/src/tokens/index.ts](file:///Users/guille/Projects/Partido%20Sintetico%20Espanol/partido_sintetico/packages/design-system/src/tokens/index.ts) with the forced dark mode token values:

```typescript
export const tokens = {
  theme: {
    colorScheme: 'dark' as const,
    forcedDarkMode: true,
  },
  colors: {
    primary: '#09090b',       // Target dark background / primary surface
    primaryHover: '#18181b',  // Elevated surface hover
    secondary: '#10b981',     // Target brand accent (LangChain emerald green)
    accent: '#34d399',        // Secondary mint/green highlight
    background: '#09090b',   // Always dark canvas background
    surface: '#121215',      // Always dark card surface
    textMain: '#f4f4f5',     // Always high-contrast light text (Zinc 100)
    textMuted: '#a1a1aa',    // Always light gray secondary text (Zinc 400)
    border: '#27272a',       // Subtle dark border lines
  },
  // ... typography, radii, spacing
};
```

---

### Step 3: Update Component Visual Specifications
Update [packages/design-system/src/specs/index.ts](file:///Users/guille/Projects/Partido%20Sintetico%20Espanol/partido_sintetico/packages/design-system/src/specs/index.ts) to document the variant bindings, token usages, and accessibility guidelines reflecting the forced dark theme.

---

### Step 4: Refactor Design System UI Components
Update the `.astro` components in `packages/design-system/src/components/`:
- **Button.astro**: Apply target button variants (solid emerald, sleek dark outline with border hover, rounded corners).
- **Card.astro**: Dark surface (`#121215`), subtle hover border highlight, crisp light text.
- **Hero.astro**: High-impact hero layout matching the target site's hero style, badge pills, and call to action.
- **Header.astro & Footer.astro**: Clean dark navigation header with brand badge and dark footer.

---

### Step 5: Verification & Isolated Preview
1. Run type checking across the monorepo:
   ```bash
   bun run check
   ```
2. Run build verification:
   ```bash
   ASTRO_TELEMETRY_DISABLED=1 bun run build
   ```
3. Preview the updated design system components in the isolated showcase app:
   ```bash
   bun run dev:docs
   ```
   Visit `http://localhost:4322` to inspect the visual look and feel.

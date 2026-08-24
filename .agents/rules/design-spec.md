# Visual Design Specification Rules & Guidelines

When working on design specifications in `packages/design-system/src/tokens/` and `packages/design-system/src/specs/`:

1. **Pure Specifications**: Focus exclusively on tokens, visual guidelines, variant schemas, and design rules. Do not write component template markup (`.astro` files).
2. **Token Integrity**: Every visual decision (colors, font sizes, line heights, border radii, shadows, spacing) must map to a named token in `src/tokens/index.ts`.
3. **Accessibility**: All text/background token combinations must meet WCAG 2.1 AA contrast requirements (minimum 4.5:1 for normal text).
4. **Spec Contracts**: Provide clear TypeScript spec objects in `src/specs/index.ts` defining allowed variants, sizes, states, and visual requirements for each component.

# Design System Rules & Guidelines

When working in `packages/design-system/`:

1. **Isolation**: Design system components must have ZERO knowledge of CMS models, database entities, or specific backend routes.
2. **Tokens First**: Use defined tokens for colors, spacing, typography, and borders (`src/tokens/index.ts`).
3. **Prop Contracts**: Define strict TypeScript interfaces for component props. Provide sensible default values.
4. **Reusability**: Build UI components to be modular, accessible, and responsive.
5. **Exports**: Export every component and token from `src/index.ts`.

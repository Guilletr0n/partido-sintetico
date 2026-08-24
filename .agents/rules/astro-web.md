# Astro Web Integration Rules & Guidelines

When working in `apps/cms/src/pages/` and `apps/cms/src/layouts/`:

1. **Separation of Presentation**: Import UI components from `@repo/design-system` for view rendering. Avoid re-implementing visual components in page files.
2. **Layout Consistency**: Wrap page routes in reusable layouts from `src/layouts/`.
3. **Data Hydration**: Fetch content via Astro Content Layer / `getCollection` and pass typed data as props to design system components.
4. **Performance**: Keep client-side JavaScript minimal; prefer static HTML rendering with SSG.

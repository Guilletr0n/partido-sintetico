# CMS Core Rules & Guidelines

When working in `apps/cms/src/content/`:

1. **Schema Integrity**: Define all content collection schemas using Zod in `src/content/config.ts`.
2. **Type Safety**: Export inferrable content types for use in Astro pages and templates.
3. **Data Access**: Encapsulate content fetching logic in clean helper functions.
4. **Validation**: Ensure frontmatter required fields (title, date, tags, description) are validated strictly.

export const tokens = {
  // Forced Dark Mode Theme Constraints (System light-mode preferences are overridden)
  theme: {
    colorScheme: 'dark' as const,
    forcedDarkMode: true,
  },
  colors: {
    primary: '#09090b',      // Zinc 950 (Dark canvas background)
    primaryHover: '#18181b', // Zinc 900 (Elevated surface hover)
    secondary: '#10b981',    // Emerald 500 (Brand accent)
    accent: '#34d399',       // Emerald 400 (Mint highlight)
    background: '#09090b',   // Always dark canvas background
    surface: '#121215',      // Always dark card surface
    textMain: '#f4f4f5',     // Always high-contrast light text (Zinc 100)
    textMuted: '#a1a1aa',    // Always light gray secondary text (Zinc 400)
    border: '#27272a',       // Dark border lines (Zinc 800)
  },
  typography: {
    fontSans: 'system-ui, -apple-system, BlinkMacSystemFont, "Geist", "Inter", "Segoe UI", Roboto, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, "Geist Mono", Menlo, Monaco, Consolas, monospace',
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3.25rem',
    },
  },
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },
};

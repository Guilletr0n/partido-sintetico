export const tokens = {
  // Forced Dark Mode Theme Constraints with Stark Brutalist Contrast
  theme: {
    colorScheme: 'dark' as const,
    forcedDarkMode: true,
  },
  colors: {
    // Canvas & Display
    primary: '#ffffff',       // Pure white for prominent display text & inverted surfaces
    primaryHover: '#f4f4f5',  // Off-white hover
    canvas: '#000000',        // Pure pitch black canvas background
    surface: '#0d0d0d',       // Deep concrete card surface
    surfaceAlt: '#141414',    // Secondary technical block surface

    // Accents & Functional
    accent: '#ff2d2d',        // Hot Accent Red (single bleeding accent, maximum statement)
    secondary: '#00ff66',     // Electric Terminal Green (system status / live evidence)
    highlight: '#ffe600',     // System Yellow (inline annotations / markers)
    link: '#0000ee',          // Default browser hyperlink blue
    linkDark: '#38bdf8',      // High-visibility cyan link for dark canvas

    // Neutral / Structural
    textMain: '#ffffff',      // Pure white main text (21:1 contrast on black)
    textMuted: '#a1a1aa',     // Zinc 400 secondary text
    textSubtle: '#71717a',    // Zinc 500 metadata / inactive text
    border: '#27272a',        // Zinc 800 solid structural rule line
    borderStrong: '#ffffff',  // Pure white 2px structural border
    borderConcrete: '#3f3f46',// Concrete gray border
  },
  typography: {
    fontSans: '"Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSerif: '"Instrument Serif", "Times New Roman", Georgia, serif',
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.5rem',  // 40px
      '5xl': '3.25rem', // 52px
      '6xl': '4rem',    // 64px
      '7xl': '5rem',    // 80px
      '8xl': '6.25rem', // 100px
    },
  },
  // Strict Brutalism: No rounded corners on any element
  radii: {
    none: '0px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
    '2xl': '0px',
    full: '0px',
  },
  // Brutalist Hard Offset Shadows
  shadows: {
    none: 'none',
    sm: '2px 2px 0px #ffffff',
    md: '3px 3px 0px #ffffff',
    lg: '4px 4px 0px #ffffff',
    accent: '4px 4px 0px #ff2d2d',
    yellow: '4px 4px 0px #ffe600',
  },
  // Brand Assets
  assets: {
    logo: {
      source: 'apps/design-system-docs/sources/images/logo-256x128.png',
      width: 256,
      height: 128,
      aspectRatio: '2:1',
      description: 'Official Partido Sintético Español raster logo (256x128px PNG).',
    },
  },
  // Subtle Background Patterns
  patterns: {
    subtleGrid: {
      backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      opacity: '0.02',
      description: 'Ultra-low contrast technical grid pattern, almost invisible on low-contrast screens.',
    },
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
};

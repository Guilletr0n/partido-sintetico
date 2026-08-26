import { tokens } from '../tokens/index.js';

export interface ComponentSpec {
  name: string;
  description: string;
  category: 'atoms' | 'molecules' | 'organisms' | 'layouts';
  variants: Record<string, { description: string; tokenUsage: Record<string, string> }>;
  sizes?: Record<string, string>;
  accessibilityNotes?: string[];
}

export const componentSpecs: Record<string, ComponentSpec> = {
  ArticleHeader: {
    name: 'ArticleHeader',
    description: 'Brutalist editorial composition for the top of an article: monospace kicker tag, massive high-contrast title (H1), lead description and technical metadata bar.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Stark black canvas composition with hot-accent kicker, massive Grotesk title, and monospace metadata.',
        tokenUsage: {
          title: tokens.colors.textMain,
          lead: tokens.colors.textMuted,
          kicker: tokens.colors.accent,
          metadata: tokens.colors.textSubtle,
        },
      },
    },
    accessibilityNotes: ['Single H1 per article page.', 'Meta line uses semantic <strong> for author name.'],
  },
  Badge: {
    name: 'Badge',
    description: 'Sharp monospace tag framed with 1px/2px solid border, 0px border radius, used as kicker, tag or category chip.',
    category: 'atoms',
    variants: {
      accent: {
        description: 'Hot red statement tag with high contrast.',
        tokenUsage: {
          text: tokens.colors.accent,
          border: tokens.colors.accent,
          background: 'rgba(255, 45, 45, 0.1)',
        },
      },
      neutral: {
        description: 'Monospace gray technical tag.',
        tokenUsage: {
          text: tokens.colors.textMuted,
          border: tokens.colors.border,
          background: tokens.colors.surfaceAlt,
        },
      },
      outline: {
        description: 'Pure white stark bordered chip.',
        tokenUsage: {
          border: tokens.colors.borderStrong,
          text: tokens.colors.textMain,
        },
      },
    },
    accessibilityNotes: ['Non-interactive by design; use links/buttons for actionable pills.'],
  },
  Button: {
    name: 'Button',
    description: 'Raw geometric button with 0px radius, 2px stark solid border, monospace/grotesk typography, and high-contrast inverted hover state.',
    category: 'atoms',
    variants: {
      primary: {
        description: 'Hot accent red or stark inverted action with hard offset hover shadow.',
        tokenUsage: {
          background: tokens.colors.accent,
          hoverBackground: tokens.colors.primary,
          text: tokens.colors.canvas,
          border: tokens.colors.accent,
        },
      },
      secondary: {
        description: 'Pure white surface with stark black text and hard offset shadow.',
        tokenUsage: {
          background: tokens.colors.primary,
          hoverBackground: tokens.colors.primaryHover,
          text: tokens.colors.canvas,
          border: tokens.colors.borderStrong,
        },
      },
      outline: {
        description: 'Stark bordered button with transparent fill and inverted fill on hover.',
        tokenUsage: {
          border: tokens.colors.borderStrong,
          background: 'transparent',
          text: tokens.colors.textMain,
          hoverText: tokens.colors.canvas,
        },
      },
    },
    sizes: {
      sm: 'px-3 py-1.5 text-xs font-mono',
      md: 'px-5 py-2.5 text-sm font-mono',
      lg: 'px-7 py-3.5 text-base font-mono font-bold',
    },
    accessibilityNotes: [
      'Focus indicator ring with 2px offset provided on key focus.',
      'Touch target minimum height >= 44px on mobile for md and lg sizes.',
    ],
  },
  Callout: {
    name: 'Callout',
    description: 'Sharp rectangular note block with thick 4px solid border, 0px radius, and monospace uppercase tag header.',
    category: 'molecules',
    variants: {
      info: {
        description: 'Stark white structural border for context or manifesto points.',
        tokenUsage: {
          border: tokens.colors.borderStrong,
          label: tokens.colors.textMain,
          text: tokens.colors.textMuted,
        },
      },
      success: {
        description: 'Terminal green accent for evidence and audited results.',
        tokenUsage: {
          border: tokens.colors.secondary,
          label: tokens.colors.secondary,
          text: tokens.colors.textMuted,
        },
      },
      warning: {
        description: 'System yellow accent for caveats, uncertainty, and limitations.',
        tokenUsage: {
          border: tokens.colors.highlight,
          label: tokens.colors.highlight,
          text: tokens.colors.textMuted,
        },
      },
    },
    accessibilityNotes: ['Do not rely on color alone: the variant label communicates the semantic.'],
  },
  Card: {
    name: 'Card',
    description: 'Modular geometric box with 2px border, 0px radius, monospace metadata, and hard offset brutalist hover shadow.',
    category: 'molecules',
    variants: {
      default: {
        description: 'Stark card surface with solid border and hot red offset shadow on hover.',
        tokenUsage: {
          background: tokens.colors.surface,
          border: tokens.colors.borderConcrete,
          hoverBorder: tokens.colors.borderStrong,
          textTitle: tokens.colors.textMain,
          textSubtitle: tokens.colors.textMuted,
        },
      },
    },
    accessibilityNotes: [
      'Accessible card title link hover state.',
      'Proper semantic heading hierarchy within card slots.',
    ],
  },
  Hero: {
    name: 'Hero',
    description: 'High-impact brutalist hero banner with massive Grotesk headline, terminal system status indicator, exposed grid lines, and stark CTAs.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Pitch black canvas with massive white display headline and hot red accent CTA.',
        tokenUsage: {
          background: tokens.colors.canvas,
          textTitle: tokens.colors.textMain,
          textSubtitle: tokens.colors.textMuted,
          accent: tokens.colors.accent,
        },
      },
    },
  },
  Header: {
    name: 'Header',
    description: 'Brutalist site navigation bar with stark 2px bottom border, square [PSE] logo stamp, and uppercase monospace navigation links.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Top header bar with pitch black canvas and stark solid border.',
        tokenUsage: {
          background: tokens.colors.canvas,
          border: tokens.colors.border,
          text: tokens.colors.textMain,
        },
      },
    },
  },
  Divider: {
    name: 'Divider',
    description: 'Stark 2px solid structural rule with optional centered monospace technical delimiter.',
    category: 'atoms',
    variants: {
      plain: {
        description: 'Stark horizontal rule line.',
        tokenUsage: {
          border: tokens.colors.borderConcrete,
        },
      },
      labeled: {
        description: 'Rule pair with centered monospace uppercase tag.',
        tokenUsage: {
          border: tokens.colors.borderConcrete,
          label: tokens.colors.textSubtle,
        },
      },
    },
  },
  Footer: {
    name: 'Footer',
    description: 'Brutalist site footer with stark 2px top border, monospace technical coordinates, system versioning, and copyright notice.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Pitch black footer with solid border and monospace metadata.',
        tokenUsage: {
          background: tokens.colors.canvas,
          border: tokens.colors.border,
          text: tokens.colors.textMuted,
        },
      },
    },
  },
  KeyFact: {
    name: 'KeyFact',
    description: 'Raw data container with gigantic monospace value, uppercase label, and crisp supporting caption.',
    category: 'molecules',
    variants: {
      default: {
        description: 'Sharp container with 2px border and massive white/green value.',
        tokenUsage: {
          background: tokens.colors.surface,
          border: tokens.colors.borderConcrete,
          value: tokens.colors.secondary,
          label: tokens.colors.textMain,
          caption: tokens.colors.textMuted,
        },
      },
    },
    accessibilityNotes: ['Value is a string; pair with a visible label so the fact is understandable without the number.'],
  },
  Lead: {
    name: 'Lead',
    description: 'High-contrast lead paragraph with crisp letter tracking for article rhythm.',
    category: 'atoms',
    variants: {
      default: {
        description: 'Elevated paragraph size in high contrast on dark canvas.',
        tokenUsage: {
          text: tokens.colors.textMain,
          size: tokens.typography.sizes.lg,
        },
      },
    },
  },
  PullQuote: {
    name: 'PullQuote',
    description: 'High-impact quote with thick solid 6px accent bar, serif or heavy grotesque typography, and monospace attribution.',
    category: 'molecules',
    variants: {
      accent: {
        description: 'Hot red solid bar with high contrast quote text.',
        tokenUsage: {
          accent: tokens.colors.accent,
          text: tokens.colors.textMain,
        },
      },
      muted: {
        description: 'Stark white bar for secondary quotes.',
        tokenUsage: {
          accent: tokens.colors.borderStrong,
          text: tokens.colors.textMain,
        },
      },
    },
    accessibilityNotes: ['Use <blockquote> semantics; attribution rendered in <footer>.', 'Keep quotes accurate and clearly attributed.'],
  },
  SectionTitle: {
    name: 'SectionTitle',
    description: 'Heavy Grotesk heading with monospace kicker tag, anchor id, and optional bottom accent underline.',
    category: 'molecules',
    variants: {
      h2: {
        description: 'Main section heading with uppercase Grotesk display.',
        tokenUsage: {
          text: tokens.colors.textMain,
          kicker: tokens.colors.accent,
        },
      },
      h3: {
        description: 'Subsection heading.',
        tokenUsage: {
          text: tokens.colors.textMain,
        },
      },
    },
    accessibilityNotes: ['Heading levels must follow document hierarchy (no skipped levels).'],
  },
  Logo: {
    name: 'Logo',
    description: 'Official brand identity mark for Partido Sintético Español (source: apps/design-system-docs/sources/images/logo-128x64-bg-black.png).',
    category: 'atoms',
    variants: {
      default: {
        description: 'Raster 2:1 ratio brand mark (256x128px PNG).',
        tokenUsage: {
          source: 'apps/design-system-docs/sources/images/logo-128x64-bg-black.png',
          width: '128px',
          height: '64px',
          aspectRatio: '2:1',
        },
      },
    },
    accessibilityNotes: ['Always specify alt="Partido Sintético Español Logo" for accessibility.'],
  },
};

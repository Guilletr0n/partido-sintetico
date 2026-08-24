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
  Button: {
    name: 'Button',
    description: 'Interactive button component supporting primary, secondary, and outline visual variants.',
    category: 'atoms',
    variants: {
      primary: {
        description: 'High-emphasis call to action.',
        tokenUsage: {
          background: tokens.colors.primary,
          hoverBackground: tokens.colors.primaryHover,
          text: tokens.colors.surface,
        },
      },
      secondary: {
        description: 'Brand-focused secondary action.',
        tokenUsage: {
          background: tokens.colors.secondary,
          hoverBackground: '#1d4ed8',
          text: tokens.colors.surface,
        },
      },
      outline: {
        description: 'Subtle bordered action for neutral choices.',
        tokenUsage: {
          border: tokens.colors.border,
          background: 'transparent',
          text: tokens.colors.textMain,
        },
      },
    },
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    accessibilityNotes: [
      'Focus indicator ring provided on key focus.',
      'Touch target minimum height >= 44px on mobile for md and lg sizes.',
    ],
  },
  Card: {
    name: 'Card',
    description: 'Container for grouped content, post previews, and proposal cards.',
    category: 'molecules',
    variants: {
      default: {
        description: 'Clean surface with subtle border and shadow on hover.',
        tokenUsage: {
          background: tokens.colors.surface,
          border: tokens.colors.border,
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
    description: 'High-impact landing section banner with headline, summary description, and call to action.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Dark slate gradient background with high contrast white title.',
        tokenUsage: {
          backgroundFrom: tokens.colors.primary,
          textTitle: tokens.colors.surface,
          textSubtitle: '#cbd5e1',
        },
      },
    },
  },
  Header: {
    name: 'Header',
    description: 'Global site navigation header bar with brand logo badge and responsive navigation links.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Top header bar with slate 900 background.',
        tokenUsage: {
          background: tokens.colors.primary,
          text: tokens.colors.surface,
        },
      },
    },
  },
  Footer: {
    name: 'Footer',
    description: 'Global site footer containing copyright notice and legal information.',
    category: 'organisms',
    variants: {
      default: {
        description: 'Subtle dark footer.',
        tokenUsage: {
          background: '#020617',
          text: tokens.colors.textMuted,
        },
      },
    },
  },
};

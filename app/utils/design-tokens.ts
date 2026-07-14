import type { DesignColorToken } from '~/types/design'

export const MERVAT_COLORS: Record<string, DesignColorToken> = {
  primary: {
    name: 'Primary (Obsidian Black)',
    hex: '#111111',
    description: 'Deep, rich black used for primary branding, luxury headers, and high-contrast text.',
    textColor: '#FFFFFF'
  },
  secondary: {
    name: 'Secondary (Silk Cream)',
    hex: '#F5F2EE',
    description: 'Soft, warm silk cream for elegant section backgrounds, secondary cards, and delicate layering.',
    textColor: '#111111'
  },
  accent: {
    name: 'Accent (Royal Gold)',
    hex: '#D4AF37',
    description: 'Metallic royal gold for call-to-actions, exclusive highlights, badges, and luxury borders.',
    textColor: '#111111'
  },
  background: {
    name: 'Background (Pure White)',
    hex: '#FFFFFF',
    description: 'Crisp white canvas ensuring maximum clarity, modern femininity, and spacious breathing room.',
    textColor: '#111111'
  },
  muted: {
    name: 'Muted (Pearl Grey)',
    hex: '#F8F8F8',
    description: 'Subtle pearl grey for borders, dividers, subtle card foundations, and muted typography.',
    textColor: '#111111'
  }
}

export const MERVAT_SPACING = [
  { name: '1 (8px)', value: '8px', usage: 'Tight element gaps, icon spacing, badge padding' },
  { name: '2 (16px)', value: '16px', usage: 'Standard component padding, card inner margins' },
  { name: '3 (24px)', value: '24px', usage: 'Medium section breaks, grid gutters' },
  { name: '4 (32px)', value: '32px', usage: 'Generous card padding, mobile section headers' },
  { name: '6 (48px)', value: '48px', usage: 'Component block separation, desktop gutters' },
  { name: '8 (64px)', value: '64px', usage: 'Major section vertical rhythm (8px grid foundation)' },
  { name: '12 (96px)', value: '96px', usage: 'Hero padding, luxury editorial breathing room' }
]

export const MERVAT_TYPOGRAPHY = {
  heading: {
    family: 'Cormorant Garamond, Playfair Display, serif',
    description: 'High-fashion editorial serif with timeless elegance and refined curves.',
    scale: [
      { level: 'Display / H1', size: '3.5rem (56px) - 4.5rem (72px)', weight: '300 Light / 400 Regular' },
      { level: 'H2 Section Heading', size: '2.5rem (40px) - 3rem (48px)', weight: '400 Regular' },
      { level: 'H3 Card / Feature Title', size: '1.75rem (28px) - 2.25rem (36px)', weight: '500 Medium' },
      { level: 'H4 Subheading', size: '1.35rem (22px)', weight: '600 SemiBold' }
    ]
  },
  body: {
    family: 'Plus Jakarta Sans, Outfit, sans-serif',
    description: 'Modern, crisp, geometric sans-serif ensuring flawless readability across all screen sizes.',
    scale: [
      { level: 'Body Large', size: '1.125rem (18px)', weight: '300 / 400' },
      { level: 'Body Standard', size: '1rem (16px)', weight: '400 Regular' },
      { level: 'Caption / Small', size: '0.875rem (14px)', weight: '500 Medium' },
      { level: 'Overline Tag', size: '0.75rem (12px) Uppercase Tracking-Widest', weight: '600 SemiBold' }
    ]
  }
}

export const MERVAT_SHADOWS = [
  { name: 'Soft Shadow', class: 'shadow-soft', description: 'Gentle elevation for base UI elements and subtle glass panels.' },
  { name: 'Luxury Shadow', class: 'shadow-luxury', description: 'Deep, rich elevation with a faint gold ambient glow for primary cards.' },
  { name: 'Luxury Hover', class: 'shadow-luxury-hover', description: 'Expanded elevation when interacting with luxury product cards.' },
  { name: 'Gold Glow', class: 'shadow-gold', description: 'Focused royal gold glow for prominent call-to-actions and badges.' }
]

export const MERVAT_ANIMATIONS = [
  { name: 'Smooth Fade', class: 'animate-fade-in', description: 'Gentle opacity transition (0.6s cubic-bezier).' },
  { name: 'Slide Up', class: 'animate-slide-up', description: 'Smooth upward entrance with opacity fade (0.8s).' },
  { name: 'Slide Down', class: 'animate-slide-down', description: 'Refined downward entrance for menus and dropdowns.' },
  { name: 'Scale Up', class: 'animate-scale-up', description: 'Subtle zoom entrance (from 92% to 100%) for modals and spotlights.' },
  { name: 'Parallax Layer', class: 'parallax-layer hover:scale-105', description: 'Scroll-reactive velocity transformation and hover depth.' }
]

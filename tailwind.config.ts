import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    // 8px base spacing system extended
    spacing: {
      0: '0px',
      0.5: '4px',
      1: '8px',
      1.5: '12px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      3.5: '28px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      14: '112px',
      16: '128px',
      20: '160px',
      24: '192px',
      28: '224px',
      32: '256px',
      auto: 'auto',
      px: '1px'
    },
    extend: {
      colors: {
        // Core Brand Palette
        primary: {
          DEFAULT: '#111111',
          50: '#F4F4F4',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#555555',
          600: '#333333',
          700: '#222222',
          800: '#1A1A1A',
          900: '#111111',
          950: '#090909'
        },
        secondary: {
          DEFAULT: '#F5F2EE',
          light: '#FBF9F7',
          dark: '#E8E2DA',
          hover: '#EDE7DE'
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#E5C45D',
          dark: '#B59021',
          glow: 'rgba(212, 175, 55, 0.25)',
          muted: '#F4EBD0'
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#FAF9F6',
          luxury: '#FDFBF9'
        },
        muted: {
          DEFAULT: '#F8F8F8',
          dark: '#E2E2E2',
          text: '#666666',
          border: '#EAEAEA'
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        full: '9999px',
        luxury: '20px'
      },
      boxShadow: {
        soft: '0 8px 32px -4px rgba(17, 17, 17, 0.06)',
        'soft-lg': '0 16px 48px -8px rgba(17, 17, 17, 0.08)',
        luxury: '0 24px 64px -12px rgba(17, 17, 17, 0.12), 0 4px 16px -4px rgba(212, 175, 37, 0.1)',
        'luxury-hover': '0 32px 80px -16px rgba(17, 17, 17, 0.18), 0 8px 24px -6px rgba(212, 175, 55, 0.25)',
        gold: '0 8px 24px -4px rgba(212, 175, 55, 0.3)',
        glass: '0 8px 32px 0 rgba(17, 17, 17, 0.07)',
        inner: 'inset 0 2px 4px 0 rgba(17, 17, 17, 0.05)'
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        scaleDown: {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-up': 'scaleUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-down': 'scaleDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 3s infinite linear',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config

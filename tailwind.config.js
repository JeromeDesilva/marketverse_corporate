/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Added gradient helper colors
        trustlight: "var(--color-trust-light)",
        successdark: "var(--color-success-dark)",

        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)'
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)'
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)'
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)'
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)'
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)'
        },
        error: {
          DEFAULT: 'var(--color-error)',
          foreground: 'var(--color-error-foreground)'
        },
        trust: {
          DEFAULT: 'var(--color-trust)',
          foreground: 'var(--color-trust-foreground)'
        },
        partnership: {
          DEFAULT: 'var(--color-partnership)',
          foreground: 'var(--color-partnership-foreground)'
        },
        innovation: {
          DEFAULT: 'var(--color-innovation)',
          foreground: 'var(--color-innovation-foreground)'
        },

        // ✅ Add solid background classes for partnership models
        'partnership-equity': 'var(--color-primary)',
        'partnership-revenue': 'var(--color-success)',
        'partnership-project': 'var(--color-innovation)',
        'partnership-market': 'var(--color-accent)'
      },


      fontFamily: {
        headline: ['var(--font-headline)', 'Inter', 'sans-serif'],
        'value-prop': ['var(--font-value-prop)', 'Poppins', 'sans-serif'],
        body: ['var(--font-body)', 'Source Sans Pro', 'sans-serif'],
        cta: ['var(--font-cta)', 'Inter', 'sans-serif'],
        accent: ['var(--font-accent)', 'JetBrains Mono', 'monospace']
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)'
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)'
      },
      transitionDuration: {
        fast: '300ms',
        base: '400ms',
        slow: '500ms'
      },

      safelist: [
  'bg-partnership-equity',
  'bg-partnership-revenue',
  'bg-partnership-project',
  'bg-partnership-market',
],

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        slideInLeft: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
        slideInUp: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
        slideInDown: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' } },
        scaleIn: { '0%': { transform: 'scale(0.9)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } }
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-in-right': 'slideInRight 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left': 'slideInLeft 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-up': 'slideInUp 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-down': 'slideInDown 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
};

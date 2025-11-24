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
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // gray-200
        ring: 'var(--color-ring)', // blue-900
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // blue-900
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // amber-400
          foreground: 'var(--color-secondary-foreground)' // gray-900
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-500
          foreground: 'var(--color-accent-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // gray-600
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)' // gray-900
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        trust: {
          DEFAULT: 'var(--color-trust)', // green-600
          foreground: 'var(--color-trust-foreground)' // white
        },
        partnership: {
          DEFAULT: 'var(--color-partnership)', // pink-600
          foreground: 'var(--color-partnership-foreground)' // white
        },
        innovation: {
          DEFAULT: 'var(--color-innovation)', // purple-600
          foreground: 'var(--color-innovation-foreground)' // white
        }
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Inter', 'sans-serif'],
        'value-prop': ['var(--font-value-prop)', 'Poppins', 'sans-serif'],
        body: ['var(--font-body)', 'Source Sans Pro', 'sans-serif'],
        cta: ['var(--font-cta)', 'Inter', 'sans-serif'],
        accent: ['var(--font-accent)', 'JetBrains Mono', 'monospace']
      },
      spacing: {
        'xs': 'var(--spacing-xs)', // 8px
        'sm': 'var(--spacing-sm)', // 13px
        'md': 'var(--spacing-md)', // 21px
        'lg': 'var(--spacing-lg)', // 34px
        'xl': 'var(--spacing-xl)' // 55px
      },
      borderRadius: {
        sm: 'var(--radius-sm)', // 4px
        md: 'var(--radius-md)', // 8px
        lg: 'var(--radius-lg)', // 16px
        full: 'var(--radius-full)' // 9999px
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
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
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
}
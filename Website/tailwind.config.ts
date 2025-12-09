import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'section': '4rem', // 64px - стандартный отступ секций
        'section-lg': '5rem', // 80px - большой отступ секций
        'element': '1.5rem', // 24px - отступ между элементами
        'element-lg': '2rem', // 32px - большой отступ между элементами
        'element-xl': '3rem', // 48px - очень большой отступ
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-bright': 'var(--muted-bright)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        purple: {
          50: 'rgba(147, 51, 234, 0.05)',
          100: 'rgba(147, 51, 234, 0.1)',
          200: 'rgba(147, 51, 234, 0.2)',
          300: 'rgba(147, 51, 234, 0.3)',
          400: 'rgba(147, 51, 234, 0.4)',
          500: '#9333ea',
          600: 'rgba(147, 51, 234, 0.6)',
          700: '#7e22ce',
          800: 'rgba(147, 51, 234, 0.8)',
          900: 'rgba(147, 51, 234, 0.9)',
          light: '#a855f7',
          dark: '#7e22ce',
        },
        blue: {
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
        },
        pink: {
          300: '#f9a8d4',
          400: '#ec4899',
          500: '#db2777',
          600: '#be185d',
        },
        cyan: {
          300: '#67e8f9',
          400: '#06b6d4',
          500: '#0891b2',
        },
        violet: {
          400: '#8b5cf6',
          500: '#7c3aed',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config


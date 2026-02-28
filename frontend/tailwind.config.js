
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: 'var(--bg-primary)',
        charcoal: 'var(--bg-secondary)',
        card: 'var(--bg-card)',
        elevated: 'var(--bg-elevated)',
        ivory: '#F8F6F1',
        champagne: '#F2EFE8',
        gold: 'var(--accent-gold)',
        'gold-muted': 'var(--accent-gold-muted)',
        platinum: 'var(--accent-platinum)',
        bronze: '#8B6914',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'border-subtle': 'var(--border-subtle)',
        'border-medium': 'var(--border-medium)',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-2xl': '0.4em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

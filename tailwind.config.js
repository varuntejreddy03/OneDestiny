export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--clr-bg)',
        surface: 'var(--clr-surface)',
        'surface-2': 'var(--clr-surface-2)',
        maroon: 'var(--clr-maroon)',
        'maroon-light': 'var(--clr-maroon-light)',
        gold: 'var(--clr-gold)',
        'gold-light': 'var(--clr-gold-light)',
        'text-primary': 'var(--clr-text)',
        muted: 'var(--clr-muted)',
        'border-custom': 'var(--clr-border)',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
}

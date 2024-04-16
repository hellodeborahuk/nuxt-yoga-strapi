/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'core-brand-alpha': 'var(--core-brand-alpha)',
        'core-brand-beta': 'var(--core-brand-beta)',
        'core-brand-charlie': 'var(--core-brand-charlie)',
        'core-brand-delta': 'var(--core-brand-delta)',
        'core-brand-echo': 'var(--core-brand-echo)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


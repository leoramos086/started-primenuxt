/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: ['selector', '.app-dark'],
  content: [],
  theme: {
    screens: {

      ...defaultTheme.screens,
      mobile: { max: '600px' },
      tablet: { max: '1023px' },
      desktop: { min: '1024px' },
      sm: '600px',
    },
    boxShadow: {
      card: 'var(--p-card-shadow)',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

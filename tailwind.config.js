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
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

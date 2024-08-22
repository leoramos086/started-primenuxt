/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['selector', '.app-dark'],
  content: [],
  theme: {
    screens: {
      mobile: { max: '991px' },
      desktop: { min: '992px' },
    },
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

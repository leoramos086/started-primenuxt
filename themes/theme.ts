import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f4f4f4',
          100: '#e8e9e9',
          200: '#d2d2d4',
          300: '#bbbcbe',
          400: '#a5a5a9',
          500: '#8e8f93',
          600: '#77787d',
          700: '#616268',
          800: '#4a4b52',
          900: '#34343d',
          950: '#1d1e27',
        },

      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f3f3f3',
          100: '#e7e7e8',
          200: '#cfd0d0',
          300: '#b7b8b9',
          400: '#9fa1a1',
          500: '#87898a',
          600: '#6e7173',
          700: '#565a5b',
          800: '#3e4244',
          900: '#262b2c',
          950: '#0e1315',
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            shadow: `rgba(0, 0, 0, 0.1) 0px 2px 6px -1px, rgba(0, 0, 0, 0.06) 0px 0px 4px -1px`,
          },
        },
        dark: {
          root: {
            shadow: `rgba(180, 180, 180, 0.2) 0px 2px 6px -1px, rgba(180, 180, 180, 0.16) 0px 0px 4px -1px`,
          },
        },
      },

    },
  },
})

export default {
  preset: MyPreset,
  options: {
    inputVariant: 'filled',
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-base, primevue, layout, tailwind-utilities',
    },

    darkModeSelector: '.app-dark',

  },
}

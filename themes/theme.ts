import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{rose.50}',
      100: '{rose.100}',
      200: '{rose.200}',
      300: '{rose.300}',
      400: '{rose.400}',
      500: '{rose.500}',
      600: '{rose.600}',
      700: '{rose.700}',
      800: '{rose.800}',
      900: '{rose.900}',
      950: '{rose.950}',
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
})

export default {
  preset: MyPreset,
  options: {
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-base, primevue, layout, tailwind-utilities',
    },

    darkModeSelector: '.app-dark',
  },
}

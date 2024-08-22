// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-lucide-icons',
    'nuxt-viewport',
  ],
  lucide: {
    namePrefix: 'Icon',
  },
  primevue: {
    importTheme: { from: '@/themes/theme.ts' },
  },
  viewport: {
    breakpoints: {
      mobile: 991,
      desktop: 992,
    },
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
    },
    fallbackBreakpoint: 'desktop',
  },
})

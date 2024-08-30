// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-lucide-icons',
    'nuxt-viewport',
  ],
  runtimeConfig: { // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  lucide: {
    namePrefix: 'Icon',
  },
  primevue: {
    importTheme: { from: '@/themes/theme.ts' },
    options: {
      inputVariant: 'filled',
    },
  },
  viewport: {
    breakpoints: {
      mobile: 0,
      tablet: 601,
      desktop: 1024,
    },
    defaultBreakpoints: {
      tablet: 'tablet',
      mobile: 'mobile',
      desktop: 'desktop',
    },
    fallbackBreakpoint: 'desktop',
  },
})

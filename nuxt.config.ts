// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],

  primevue: {
    importTheme: { from: '@/themes/theme.ts' },
  },
})

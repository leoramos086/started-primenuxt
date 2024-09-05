export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const auth = useAuth()
  const api = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
    onRequest({ options }) {
      const token = useCookie('XSRF-TOKEN')
      if (token?.value) {
        options.headers = options.headers || {}

        // @ts-expect-error Set xsrf token in header
        options.headers['X-XSRF-TOKEN'] = token.value as string
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        auth.setUser(null)
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})

export default defineNuxtRouteMiddleware(async (to) => {
  const { attempt, auth } = useAuth()

  // Se global, array com paginas que não usaram esse middleware
  if (['login'].includes((to.name as string))) return

  if (!auth.user) {
    const user = await attempt()
    if (!user) {
      return navigateTo('/login')
    }
  }
})

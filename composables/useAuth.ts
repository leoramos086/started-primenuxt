const auth = reactive<Auth.StateUseState>({
  authenticated: false,
  user: null,
})

export default function useAuth() {
  const isLoggin = computed(() => auth.user !== null)

  const setUser = (user: Auth.UserState) => {
    auth.user = user
  }

  async function login(credentials: Auth.LoginForm) {
    await useAPI('/sanctum/csrf-cookie')

    const { error } = await useAPI('/login', {
      method: 'POST',
      body: credentials,
    })

    if (error.value) {
      if (error.value.statusCode === 422) {
        return Promise.reject('Endereço de e-mail e/ou senha incorretos. Por favor, Tente novamente.')
      }
      return Promise.reject(error.value.statusMessage)
    }

    return attempt()
  }

  async function logout() {
    await useAPI('/sanctum/csrf-cookie')

    setUser(null)

    await useAPI('/logout', { method: 'POST' })

    await navigateTo('/login')
  }

  async function attempt() {
    try {
      const { data, error } = await useAPI<Auth.User>('/api/user')

      if (error.value) {
        console.error('error', error.value)
        setUser(null)
      }

      setUser(data.value)

      return data.value
    }
    catch (e) {
      console.log('error', e)
      setUser(null)
    }
  }

  return {
    auth: readonly(auth),
    isLoggin,
    login,
    logout,
    setUser,
    attempt,
  }
}

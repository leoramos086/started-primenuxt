const state = reactive<Auth.StateUseState>({
  authenticated: false,
  user: null,
})

export default function Auth() {
  const authenticated = computed(() => state.authenticated)
  const user = computed(() => state.user)

  const setAuthenticated = (authenticated: boolean) => {
    state.authenticated = authenticated
  }

  const setUser = (user: Auth.UserState) => {
    state.user = user
  }

  const login = async (credentials: Auth.LoginForm) => {
    await useAPI('/sanctum/csrf-cookie')

    const { error } = await useAPI('/login', {
      method: 'POST',
      body: credentials,
    })

    if (error.value) {
      return Promise.reject(error.value.message)
    }

    return attempt()
  }

  const attempt = async () => {
    try {
      const { data, error } = await useAPI<Auth.User>('/api/user')

      if (error.value) {
        console.error('error', error.value)
        setAuthenticated(false)
        setUser(null)
      }

      setAuthenticated(true)
      setUser(data.value)

      return data.value
    }
    catch (e) {
      console.log('error', e)
      setAuthenticated(false)
      setUser(null)
    }
  }

  return {
    authenticated,
    user,
    login,
    attempt,
  }
}

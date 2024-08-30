declare namespace Auth {

  interface User {
    name: string
    id: number
  }

  type UserState = User | null

  interface StateUseState {
    authenticated: boolean
    user: UserState
  }

  interface LoginForm {
    email: string
    password: string
  }
}

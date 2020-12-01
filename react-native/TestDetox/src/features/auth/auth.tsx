import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

import { SignInForm, User } from '@src/types/local'

interface IAuthContext {
  user: User
  isAuthenticated: boolean
  signIn: (form: SignInForm) => any
  signOut: () => any
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

interface AuthState extends Pick<IAuthContext, 'user' | 'isAuthenticated'> {}

const defaultUser: User = { username: '' }

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({ user: defaultUser, isAuthenticated: false })

  const signIn = useCallback(
    (form: SignInForm) => {
      setState({ user: { username: form.username }, isAuthenticated: true })
    },
    [setState]
  )

  const signOut = useCallback(() => {
    setState({ user: defaultUser, isAuthenticated: false })
  }, [setState])

  const providerValues = useMemo(
    () => ({
      ...state,
      signIn,
      signOut,
    }),
    [signIn, signOut, state]
  )

  return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>
}

import { client } from '../../api'
import { devClient } from '../../api/dev-client'

export const SIGN_IN = {
  PENDING: 'SIGN_IN_REQUEST',
  SUCCESS: 'SIGN_IN_SUCCESS',
  ERROR: 'SIGN_IN_ERROR',
  SIGN_IN: 'SIGN_IN',
}

const AuthorizationAdapter = {
  parse: ({ token, ...rest }) => ({
    ...rest,
    authToken: token,
  }),
}

export const signIn = authInfo => {
  return async dispatch => {
    dispatch({ type: SIGN_IN.PENDING })
    try {
      const { data } = await devClient.request(
        {
          url: '/sign-in',
          method: 'post',
          data: { user: authInfo },
        },
        null,
        AuthorizationAdapter
      )
      dispatch({ type: SIGN_IN.SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: SIGN_IN.ERROR, payload: error.message })
    }
  }
}

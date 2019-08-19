import { client } from '../../api'
import { devClient } from '../../api/dev-client'

export const SIGN_IN = {
  PENDING: 'SIGN_IN_REQUEST',
  SUCCESS: 'SIGN_IN_SUCCESS',
  ERROR: 'SIGN_IN_ERROR',
  SIGN_IN: 'SIGN_IN',
}

export const signIn = authInfo => {
  return dispatch => {
    dispatch({ type: SIGN_IN.PENDING })
    devClient.request({
      url: '/sign-in',
      method: 'post',
      data: { user: authInfo },
    })
  }
}

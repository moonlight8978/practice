import { SIGN_IN } from './authorization.actions'

const defaultState = {
  isAuthenticated: false,
  authToken: null,
  tokenExpiration: null,
  isLoading: false,
  error: null,
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SIGN_IN.PENDING: {
      return {
        isLoading: true,
        isAuthenticated: false,
        authToken: null,
        tokenExpiration: null,
        error: null,
      }
    }
    case SIGN_IN.ERROR: {
      return {
        isLoading: false,
        error: payload,
      }
    }
    case SIGN_IN.SUCCESS: {
      return {
        isLoading: false,
        isAuthenticated: true,
        tokenExpiration: payload.tokenExpiration,
        authToken: payload.authToken,
      }
    }
    default: {
      return state
    }
  }
}

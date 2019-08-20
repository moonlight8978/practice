import { combineReducers } from 'redux'

import { authorizationReducer } from '../pages/auth'

export default combineReducers({
  authorization: authorizationReducer,
})

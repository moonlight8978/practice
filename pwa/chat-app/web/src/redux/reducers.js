import { combineReducers } from 'redux'

import { authorizationReducer } from '../components/authorization'

export default combineReducers({
  authorization: authorizationReducer,
})

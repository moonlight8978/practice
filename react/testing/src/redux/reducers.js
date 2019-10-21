import { combineReducers } from 'redux'

import { peopleReducer } from '../pages/auth'

export default combineReducers({
  people: peopleReducer,
})

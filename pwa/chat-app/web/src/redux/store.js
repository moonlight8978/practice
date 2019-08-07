import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './reducers'

const middlewares = [thunk]

const store = createStore(
  counterReducer,
  undefined,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )
)

export default store

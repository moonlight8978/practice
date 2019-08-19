import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [thunk]

const store = createStore(
  reducers,
  undefined,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )
)

export default store

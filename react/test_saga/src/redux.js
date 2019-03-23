import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { sagaWatcher } from './saga'

const initialState = {
  test: 1,
}

const reducer = (state = initialState, action = {}) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(sagaWatcher)

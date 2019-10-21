/* eslint-disable import/no-extraneous-dependencies */
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockedStore = configureMockStore(middlewares)

export async function mockStore(initialState = {}, action) {
  const store = mockedStore(initialState)
  if (action) {
    return store.dispatch(action).then(() => store)
  }
  return store
}

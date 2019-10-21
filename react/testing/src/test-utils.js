/* eslint-disable import/no-extraneous-dependencies */
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockedStore = configureMockStore(middlewares)

export async function mockStore(initialState = {}, action) {
  const store = mockedStore(initialState)
  if (action) {
    return store.dispatch(action).then(() => store)
  }
  return store
}

export function mockAxios(...handlers) {
  const mock = new MockAdapter(axios)

  handlers.forEach(handler => {
    handler(mock)
  })
}

import { put, take } from 'redux-saga/effects'

import { types } from './home.constants'

export function* homeSaga() {
  yield take(types.fromNode)
  yield put({
    type: types.success,
  })
}

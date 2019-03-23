import { takeEvery, all } from 'redux-saga/effects'

import { types as homeTypes } from './home.constants'
import { homeSaga } from './home.saga'

export function* sagaWatcher() {
  yield all([takeEvery(homeTypes.call, homeSaga)])
}

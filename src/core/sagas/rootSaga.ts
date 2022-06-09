import {all, fork} from 'redux-saga/effects';

import phoneListSaga from './phoneListSaga';

export default function* rootSaga() {
  yield all([fork(phoneListSaga)]);
}

import {all, fork} from 'redux-saga/effects';

import productListSaga from './productListSaga';
import productDetailsSaga from './productDetailsSaga';

export default function* rootSaga() {
  yield all([fork(productListSaga), fork(productDetailsSaga)]);
}

import {all, fork} from 'redux-saga/effects';

import productListSaga from './productListSaga';
import productDetailsSaga from './productDetailsSaga';
import userSaga from './userSaga';
import cartSaga from './cartSaga';

export default function* rootSaga() {
  yield all([
    fork(productListSaga),
    fork(productDetailsSaga),
    fork(userSaga),
    fork(cartSaga),
  ]);
}

import {all, fork} from 'redux-saga/effects';

import productListSaga from './productListSaga';
import productDetailsSaga from './productDetailsSaga';
import userSaga from './userSaga';
import cartSaga from './cartSaga';
import networkIssueSaga from './networkIssueSaga';

export default function* rootSaga() {
  yield all([
    fork(productListSaga),
    fork(productDetailsSaga),
    fork(userSaga),
    fork(cartSaga),
    fork(networkIssueSaga),
  ]);
}

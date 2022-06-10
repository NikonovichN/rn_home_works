import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import * as actions from '../actions/phoneListActions';
import * as actionTypes from '../actions/phoneListTypes';
import {Convertor} from '../convertor/Convertor';
import {ProductList} from '../entities/ProductList';
import {fetchPhoneList} from '../services/fetchPhoneList';

function* onLoadPhoneList() {
  try {
    yield put(actions.getPhonesRequest());

    const data: object = yield call(fetchPhoneList);
    let products: ProductList = Convertor.toProductList(data);
  } catch (error) {
    console.log('error ', error);
  }
}

function* watchOnLoadPhoneList() {
  // fetch data on first load
  yield call(onLoadPhoneList);

  yield takeEvery(actionTypes.GET_PHONES, onLoadPhoneList);
}

export default function* phoneListSaga() {
  yield all([fork(watchOnLoadPhoneList)]);
}

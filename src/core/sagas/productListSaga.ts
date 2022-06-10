import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import * as actions from '../actions/productListActions';
import * as actionTypes from '../actions/productListTypes';
import {Convertor} from '../convertor/Convertor';
import {ProductList} from '../entities/ProductList';
import {fetchProductList} from '../services/fetchProductList';

function* onLoadProductList() {
  try {
    yield put(actions.getPhonesRequest());

    const data: object = yield call(fetchProductList);
    let products: ProductList = Convertor.toProductList(data);
  } catch (error) {
    console.log('error ', error);
  }
}

function* watchOnLoadProductList() {
  // fetch data on first load
  yield call(onLoadProductList);

  yield takeEvery(actionTypes.GET_PHONES, onLoadProductList);
}

export default function* productListSaga() {
  yield all([fork(watchOnLoadProductList)]);
}

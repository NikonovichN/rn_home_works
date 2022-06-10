import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import {Convertor} from '../convertor/Convertor';
import {ProductList} from '../entities/ProductList';
import {fetchProductList} from '../services/fetchProductList';

import * as actions from '../actions/productListActions';
import * as actionTypes from '../actions/productListTypes';

function* onLoadProductList() {
  try {
    yield put(actions.getProductsRequest());

    const data: object = yield call(fetchProductList);
    let products: ProductList = Convertor.toProductList(data);

    yield put(actions.getProductsSuccess(products));
  } catch (error) {
    yield put(actions.getProductsFailure(`${error}`));
  }
}

function* watchOnLoadProductList() {
  // fetch data on first load
  yield call(onLoadProductList);

  yield takeEvery(actionTypes.GET_PRODUCTS, onLoadProductList);
}

export default function* productListSaga() {
  yield all([fork(watchOnLoadProductList)]);
}

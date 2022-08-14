import {all, call, fork, put, takeLeading} from 'redux-saga/effects';

import {productListActions, productListTypes} from '@actions';
import {ProductList} from '@entities';

import {fetchProductList} from '../services';
import getProductImagesSaga from './productImages';

interface Data {
  data: [];
}

function* onLoadProductList() {
  try {
    yield put(productListActions.getProductsRequest());

    const serverData: Data = yield call(fetchProductList);
    const products: ProductList = yield call(getProductImagesSaga, serverData);

    yield put(productListActions.getProductsSuccess(products!));
  } catch (error) {
    yield put(productListActions.getProductsFailure(`${error}`));
  }
}

function* watchOnLoadProductList() {
  // fetch data on first load
  yield call(onLoadProductList);

  yield takeLeading(productListTypes.GET_PRODUCTS, onLoadProductList);
}

export default function* productListSaga() {
  yield all([fork(watchOnLoadProductList)]);
}

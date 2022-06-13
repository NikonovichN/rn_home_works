import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import {Convertor} from '../convertor/Convertor';
import {ProductList} from '../entities/ProductList';
import {fetchImagesLink, fetchProductList} from '../services/services';

import * as actions from '../actions/productListActions';
import * as actionTypes from '../actions/productListTypes';

interface Data extends Object {
  data: [];
}

function* onLoadProductList() {
  try {
    yield put(actions.getProductsRequest());

    let products: ProductList;

    const serverData: Data = yield call(fetchProductList);

    if (serverData.hasOwnProperty('data')) {
      let images: Data = yield call(
        fetchImagesLink,
        serverData.data.length.toString(),
      );
      products = Convertor.toProductList(serverData.data, images.data);
    }

    yield put(actions.getProductsSuccess(products!));
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

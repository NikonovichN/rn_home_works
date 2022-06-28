import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import {productListActions, productListTypes} from '../actions';
import {ProductListConverter} from '../converters';
import {ProductList} from '../entities';
import {fetchImagesLink, fetchProductList} from '../services';

interface Data extends Object {
  data: [];
}

function* onLoadProductList() {
  try {
    yield put(productListActions.getProductsRequest());

    let products: ProductList;

    const serverData: Data = yield call(fetchProductList);

    if (serverData?.data) {
      let images: Data = yield call(
        fetchImagesLink,
        serverData.data.length.toString(),
      );
      products = ProductListConverter.toProductList(
        serverData.data,
        images.data,
      );
    } else {
      throw new Error('Something went wrong!');
    }

    yield put(productListActions.getProductsSuccess(products!));
  } catch (error) {
    yield put(productListActions.getProductsFailure(`${error}`));
  }
}

function* watchOnLoadProductList() {
  // fetch data on first load
  yield call(onLoadProductList);

  yield takeEvery(productListTypes.GET_PRODUCTS, onLoadProductList);
}

export default function* productListSaga() {
  yield all([fork(watchOnLoadProductList)]);
}

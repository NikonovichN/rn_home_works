import {call, put, takeEvery} from 'redux-saga/effects';

import {ProductList} from '@entities';
import {fetchImagesLink, fetchProductList} from '../services';
import {searchProductsTypes, searchProductsActions} from '@actions';
import {ProductListConverter} from '../converters';

interface Data extends Object {
  data: [];
}

function* onSearchProductsSaga(action: searchProductsTypes.SearchProducts) {
  try {
    yield put(searchProductsActions.searchProductsRequest());

    let products: ProductList;

    const serverData: Data = yield call(fetchProductList, action.filter);

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

    yield put(searchProductsActions.searchProductsSuccess(products!));
  } catch (error) {
    yield put(searchProductsActions.searchProductsFailure(`${error}`));
  }
}

export default function* searchProductsSaga() {
  yield takeEvery(searchProductsTypes.SEARCH_PRODUCTS, onSearchProductsSaga);
}

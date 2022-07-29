import {call, put, select, takeEvery} from 'redux-saga/effects';

import {Product, ProductList} from '@entities';
import {
  fetchImagesLink,
  fetchProductList,
  readAsyncStorage,
  saveAsyncStorage,
} from '../services';
import {searchProductsTypes, searchProductsActions} from '@actions';
import {ProductListConverter} from '../converters';
import {SearchProductsState} from '../reducers/searchProductsReducer';
import {searchProductsSelector} from '@selectors';

const SEARCH_STORAGE_KEY = 'SEARCH_STORAGE_KEY';

interface Data extends Object {
  data: [];
}

type SearchStorageData = {
  products: Product[] | null;
  filters: string[];
};

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
    yield put(searchProductsActions.searchProductsSaveStorage());
  } catch (error) {
    yield put(searchProductsActions.searchProductsFailure(`${error}`));
  }
}

function* onSearchProductsSaveSaga() {
  const state: SearchProductsState = yield select(searchProductsSelector);
  const saveData: SearchStorageData = {
    products: state.products,
    filters: state.filters,
  };

  yield call(saveAsyncStorage, SEARCH_STORAGE_KEY, JSON.stringify(saveData));
}

function* onSearchProductsReadSaga() {
  const storageData: string | null = yield call(
    readAsyncStorage,
    SEARCH_STORAGE_KEY,
  );
  if (storageData) {
    const readData: SearchStorageData = JSON.parse(storageData);

    yield put(
      searchProductsActions.searchProductsReadStorageSuccess(
        readData.products,
        readData.filters,
      ),
    );
  }
}

export default function* searchProductsSaga() {
  yield takeEvery(searchProductsTypes.SEARCH_PRODUCTS, onSearchProductsSaga);
  yield takeEvery(
    searchProductsTypes.SEARCH_PRODUCTS_READ_STORAGE,
    onSearchProductsReadSaga,
  );
  yield takeEvery(
    searchProductsTypes.SEARCH_PRODUCTS_SAVE_STORAGE,
    onSearchProductsSaveSaga,
  );
}

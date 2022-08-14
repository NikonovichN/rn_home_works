import {call, put, select, takeLeading} from 'redux-saga/effects';

import {Product, ProductList} from '@entities';
import {searchProductsTypes, searchProductsActions} from '@actions';
import {searchProductsSelector} from '@selectors';

import {
  fetchImagesLink,
  fetchProductList,
  readAsyncStorage,
  saveAsyncStorage,
} from '../services';
import {SearchProductsState} from '../reducers/searchProductsReducer';
import getProductImagesSaga from './productImages';

const SEARCH_STORAGE_KEY = 'SEARCH_STORAGE_KEY';

interface Data {
  data: [];
}

type SearchStorageData = {
  products: Product[] | null;
  filters: string[];
};

function* onSearchProductsSaga(action: searchProductsTypes.SearchProducts) {
  try {
    yield put(searchProductsActions.searchProductsRequest());

    const serverData: Data = yield call(fetchProductList, action.filter);
    const products: ProductList = yield call(getProductImagesSaga, serverData);

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
  yield takeLeading(searchProductsTypes.SEARCH_PRODUCTS, onSearchProductsSaga);
  yield takeLeading(
    searchProductsTypes.SEARCH_PRODUCTS_READ_STORAGE,
    onSearchProductsReadSaga,
  );
  yield takeLeading(
    searchProductsTypes.SEARCH_PRODUCTS_SAVE_STORAGE,
    onSearchProductsSaveSaga,
  );
}

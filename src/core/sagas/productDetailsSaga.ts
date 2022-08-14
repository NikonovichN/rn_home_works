import {call, put, takeLeading} from 'redux-saga/effects';

import {Product} from '../entities/ProductList';

import {productDetailsActions, productDetailsTypes} from '@actions';
import {fetchProductDetails} from '../services';

import getProductImagesSaga from './productImages';

interface Data {
  data: {};
}

function* onLoadProductDetails(action: productDetailsTypes.GetProductAction) {
  try {
    yield put(productDetailsActions.getProductDetailsRequest());

    const serverData: Data = yield call(fetchProductDetails, action.productId);
    const product: Product = yield call(getProductImagesSaga, serverData);

    yield put(productDetailsActions.getProductDetailsSuccess(product));
  } catch (error) {
    yield put(productDetailsActions.getProductDetailsFailure(`${error}`));
  }
}

export default function* productDetailsSaga() {
  yield takeLeading(productDetailsTypes.GET_PRODUCT, onLoadProductDetails);
}

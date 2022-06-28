import {call, put, takeEvery} from 'redux-saga/effects';

import {Product} from '../entities/ProductList';

import {productDetailsActions, productDetailsTypes} from '../actions';
import {fetchImagesLink, fetchProductDetails} from '../services';
import {ProductListConverter} from '../converters';

interface Data {
  data: {};
}

function* onLoadProductDetails(action: productDetailsTypes.GetProductAction) {
  try {
    yield put(productDetailsActions.getProductDetailsRequest());

    let product: Product;

    const serverData: Data = yield call(fetchProductDetails, action.productId);

    if (serverData?.data) {
      let image: Data = yield call(fetchImagesLink, '1');
      product = ProductListConverter.toProduct(serverData.data, image.data);
    } else {
      throw new Error('Something went wrong!');
    }

    yield put(productDetailsActions.getProductDetailsSuccess(product!));
  } catch (error) {
    yield put(productDetailsActions.getProductDetailsFailure(`${error}`));
  }
}

export default function* productDetailsSaga() {
  yield takeEvery(productDetailsTypes.GET_PRODUCT, onLoadProductDetails);
}

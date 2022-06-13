import {call, put, takeEvery} from 'redux-saga/effects';

import {Product} from '../entities/ProductList';

import * as actions from '../actions/productDetailsActions';
import * as actionTypes from '../actions/productDetailsTypes';

import {fetchImagesLink, fetchProductDetails} from '../services/services';
import {Convertor} from '../convertor/Convertor';

interface Data {
  data: {};
}

function* onLoadProductDetails(action: actionTypes.GetProductAction) {
  try {
    yield put(actions.getProductDetailsRequest());

    let product: Product;

    const serverData: Data = yield call(fetchProductDetails, action.productId);

    if (serverData.hasOwnProperty('data')) {
      let image: Data = yield call(fetchImagesLink, '1');
      product = Convertor.toProduct(serverData.data, image.data);
    } else {
      throw new Error('Something went wrong!');
    }

    yield put(actions.getProductDetailsSuccess(product!));
  } catch (error) {
    yield put(actions.getProductDetailsFailure(`${error}`));
  }
}

export default function* productDetailsSaga() {
  yield takeEvery(actionTypes.GET_PRODUCT, onLoadProductDetails);
}

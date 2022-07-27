import {call, put, takeEvery} from 'redux-saga/effects';

import {addToCartTypes, addToCartActions} from '../actions';
import {CartConverter} from '../converters';
import {Cart} from '../entities';
import {addToCartService} from '../services';

interface Data {
  data: {};
}

function* addToCart(action: addToCartTypes.AddToCart) {
  try {
    yield put(addToCartActions.addToCartRequest());

    let cartData: Data = yield call(addToCartService, action.variantId);
    let cart: Cart = CartConverter.convertToCart(cartData.data);

    yield put(addToCartActions.addToCartSuccess(cart));
  } catch (error) {
    yield put(addToCartActions.addToCartFailure(`${error}`));
  }
}

export default function* cartSaga() {
  yield takeEvery(addToCartTypes.ADD_TO_CART, addToCart);
}

import {call, put, select, takeEvery} from 'redux-saga/effects';
import {
  navigateToLogIn,
  navigateToSuccessAddCart,
} from '../../pages/ModalWindows';

import {addToCartTypes, addToCartActions} from '../actions';
import {CartConverter} from '../converters';
import {Cart} from '../entities';
import {addToCartService, isLoggedSelector} from '../services';

interface Data {
  data: {};
}

function* addToCart(action: addToCartTypes.AddToCart) {
  try {
    const userIsLogged: boolean = yield select(isLoggedSelector);

    if (!userIsLogged) {
      navigateToLogIn({navigation: action.navigation, action});
    } else {
      yield put(addToCartActions.addToCartRequest());

      let cartData: Data = yield call(addToCartService, action.variantId);
      let cart: Cart = CartConverter.convertToCart(cartData.data);

      yield put(addToCartActions.addToCartSuccess(cart));
      navigateToSuccessAddCart({navigation: action.navigation});
    }
  } catch (error) {
    yield put(addToCartActions.addToCartFailure(`${error}`));
  }
}

export default function* cartSaga() {
  yield takeEvery(addToCartTypes.ADD_TO_CART, addToCart);
}

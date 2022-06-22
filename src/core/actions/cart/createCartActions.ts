import {Cart} from '../../entities/Cart';
import * as actions from './createCartTypes';

export function cartCreate(): actions.CreateCart {
  return {type: actions.CREATE_CART};
}

export function cartCreateRequest(): actions.CreateCartRequest {
  return {type: actions.CREATE_CART_REQUEST};
}

export function cartCreateSuccess(cart: Cart): actions.CreateCartSuccess {
  return {type: actions.CREATE_CART_SUCCESS, cart};
}

export function cartCreateFailure(
  error: Error | string,
): actions.CreateCartFailure {
  return {type: actions.CREATE_CART_FAILURE, error};
}

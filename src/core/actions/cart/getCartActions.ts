import {Cart} from '../../entities/Cart';
import * as actions from './getCartTypes';

export function getCart(): actions.GetCart {
  return {type: actions.GET_CART};
}

export function getCartRequest(): actions.GetCartRequest {
  return {type: actions.GET_CART_REQUEST};
}

export function getCartSuccess(cart: Cart): actions.GetCartSuccess {
  return {type: actions.GET_CART_SUCCESS, cart};
}

export function GetCartFailure(error: Error | string): actions.GetCartFailure {
  return {type: actions.GET_CART_FAILURE, error};
}

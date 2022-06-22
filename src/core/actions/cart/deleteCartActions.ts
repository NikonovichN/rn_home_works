import * as actions from './deleteCartTypes';

export function deleteCart(): actions.DeleteCart {
  return {type: actions.DELETE_CART};
}

export function deleteCartRequest(): actions.DeleteCartRequest {
  return {type: actions.DELETE_CART_REQUEST};
}

export function deleteCartSuccess(): actions.DeleteCartSuccess {
  return {type: actions.DELETE_CART_SUCCESS};
}

export function deleteCartFailure(
  error: Error | string,
): actions.DeleteCartFailure {
  return {type: actions.DELETE_CART_FAILURE, error};
}

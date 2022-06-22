export const DELETE_CART = 'cart/DELETE_CART';
export interface DeleteCart {
  type: typeof DELETE_CART;
}

export const DELETE_CART_REQUEST = 'cart/DELETE_CART_REQUEST';
export interface DeleteCartRequest {
  type: typeof DELETE_CART_REQUEST;
}

export const DELETE_CART_SUCCESS = 'cart/DELETE_CART_SUCCESS';
export interface DeleteCartSuccess {
  type: typeof DELETE_CART_SUCCESS;
}

export const DELETE_CART_FAILURE = 'cart/DELETE_CART_FAILURE';
export interface DeleteCartFailure {
  type: typeof DELETE_CART_FAILURE;
  error: Error | string;
}

export type DeleteCartTypes =
  | DeleteCart
  | DeleteCartRequest
  | DeleteCartSuccess
  | DeleteCartFailure;

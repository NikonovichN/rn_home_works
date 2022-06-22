import {Cart} from '../../entities/Cart';

export const CREATE_CART = 'cart/CREATE_CART';
export interface CreateCart {
  type: typeof CREATE_CART;
}

export const CREATE_CART_REQUEST = 'cart/CREATE_CART_REQUEST';
export interface CreateCartRequest {
  type: typeof CREATE_CART_REQUEST;
}

export const CREATE_CART_SUCCESS = 'cart/CREATE_CART_SUCCESS';
export interface CreateCartSuccess {
  type: typeof CREATE_CART_SUCCESS;
  cart: Cart;
}
export const CREATE_CART_FAILURE = 'cart/CREATE_CART_FAILURE';
export interface CreateCartFailure {
  type: typeof CREATE_CART_FAILURE;
  error: Error | string;
}

export type CreateCartTypes =
  | CreateCart
  | CreateCartRequest
  | CreateCartSuccess
  | CreateCartFailure;

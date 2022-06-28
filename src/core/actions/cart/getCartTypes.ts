import {Cart} from '../../entities/Cart';
import {CART} from './constants';

export const GET_CART = `${CART}/GET_CART`;
export interface GetCart {
  type: typeof GET_CART;
}

export const GET_CART_REQUEST = `${CART}/GET_CART_REQUEST`;
export interface GetCartRequest {
  type: typeof GET_CART_REQUEST;
}

export const GET_CART_SUCCESS = `${CART}/GET_CART_SUCCESS`;
export interface GetCartSuccess {
  type: typeof GET_CART_SUCCESS;
  cart: Cart;
}

export const GET_CART_FAILURE = `${CART}/GET_CART_FAILURE`;
export interface GetCartFailure {
  type: typeof GET_CART_FAILURE;
  error: Error | string;
}

export type GetCartTypes =
  | GetCart
  | GetCartRequest
  | GetCartSuccess
  | GetCartFailure;

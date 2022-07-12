import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Cart} from '../../entities';

export const ADD_TO_CART = 'cart/ADD_TO_CART';
export interface AddToCart {
  type: typeof ADD_TO_CART;
  variantId: string;
}

export const ADD_TO_CART_REQUEST = 'cart/ADD_TO_CART_REQUEST';
export interface AddToCartRequest {
  type: typeof ADD_TO_CART_REQUEST;
}

export const ADD_TO_CART_SUCCESS = 'cart/ADD_TO_CART_SUCCESS';
export interface AddToCartSuccess {
  type: typeof ADD_TO_CART_SUCCESS;
  cart: Cart;
}

export const ADD_TO_CART_FAILURE = 'cart/ADD_TO_CART_FAILURE';
export interface AddToCartFailure {
  type: typeof ADD_TO_CART_FAILURE;
  error: Error | string;
}

export type AddToCartTypes =
  | AddToCart
  | AddToCartRequest
  | AddToCartSuccess
  | AddToCartFailure;

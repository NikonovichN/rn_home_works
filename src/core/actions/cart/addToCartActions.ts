import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Cart} from '../../entities';
import * as actions from './addToCartTypes';

export function addToCart(variantId: string): actions.AddToCart {
  return {type: actions.ADD_TO_CART, variantId};
}

export function addToCartRequest(): actions.AddToCartRequest {
  return {type: actions.ADD_TO_CART_REQUEST};
}

export function addToCartSuccess(cart: Cart): actions.AddToCartSuccess {
  return {type: actions.ADD_TO_CART_SUCCESS, cart};
}

export function addToCartFailure(
  error: Error | string,
): actions.AddToCartFailure {
  return {type: actions.ADD_TO_CART_FAILURE, error};
}

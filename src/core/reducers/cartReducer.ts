import {addToCartTypes, getCartTypes} from '../actions/cart';
import {Cart} from '../entities';

export interface CartState {
  data: Cart | null;
  isLoading: boolean;
  isCartCreating: boolean;
  error: Error | string | null;
  deleteCartError: Error | string | null;
}

const initialState: CartState = {
  data: null,
  isLoading: false,
  isCartCreating: false,
  error: null,
  deleteCartError: null,
};

export default function cartReducer(
  state: CartState = initialState,
  action: addToCartTypes.AddToCartTypes | getCartTypes.GetCartTypes,
): CartState {
  switch (action.type) {
    case addToCartTypes.ADD_TO_CART || getCartTypes.GET_CART:
      return {...state, isLoading: true};
    case addToCartTypes.ADD_TO_CART_SUCCESS || getCartTypes.GET_CART_SUCCESS:
      return {
        data: action.cart,
        isLoading: false,
        isCartCreating: false,
        error: null,
        deleteCartError: null,
      };
    case addToCartTypes.ADD_TO_CART_FAILURE || getCartTypes.GET_CART_FAILURE:
      return {
        data: null,
        isLoading: false,
        isCartCreating: false,
        error: action.error,
        deleteCartError: null,
      };
    default:
      return state;
  }
}

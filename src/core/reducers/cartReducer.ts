import {
  addToCartTypes,
  createCartTypes,
  deleteCartTypes,
  getCartTypes,
} from '../actions/cart/cart';
import {Cart} from '../entities/Cart';

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
  action:
    | addToCartTypes.AddToCartTypes
    | createCartTypes.CreateCartTypes
    | deleteCartTypes.DeleteCartTypes
    | getCartTypes.GetCartTypes,
): CartState {
  switch (action.type) {
    case getCartTypes.GET_CART ||
      addToCartTypes.ADD_TO_CART ||
      deleteCartTypes.DELETE_CART:
      return {...state, isLoading: true};
    case createCartTypes.CREATE_CART:
      return {...state, isLoading: true, isCartCreating: true};
    case deleteCartTypes.DELETE_CART_SUCCESS: {
      return initialState;
    }
    case addToCartTypes.ADD_TO_CART_SUCCESS ||
      createCartTypes.CREATE_CART_SUCCESS ||
      getCartTypes.GET_CART_SUCCESS:
      return {
        data: action.cart,
        isLoading: false,
        isCartCreating: false,
        error: null,
        deleteCartError: null,
      };
    case addToCartTypes.ADD_TO_CART_FAILURE ||
      createCartTypes.CREATE_CART_FAILURE ||
      getCartTypes.GET_CART_FAILURE:
      return {
        data: null,
        isLoading: false,
        isCartCreating: false,
        error: action.error,
        deleteCartError: null,
      };
    case deleteCartTypes.DELETE_CART_FAILURE:
      return {
        ...state,
        deleteCartError: action.error,
      };
    default:
      return state;
  }
}

import {productListTypes} from '../actions';
import {Product} from '../entities';

export interface ProductsListState {
  products: Product[];
  isLoading: Boolean;
  error: Error | string | null;
}

const initialState: ProductsListState = {
  products: [],
  isLoading: true,
  error: null,
};

export default function productListReducer(
  state: ProductsListState = initialState,
  action: productListTypes.ListProducts,
): ProductsListState {
  switch (action.type) {
    case productListTypes.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case productListTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.data.productList,
        isLoading: false,
        error: null,
      };
    case productListTypes.GET_PRODUCTS_FAILURE:
      return {
        products: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

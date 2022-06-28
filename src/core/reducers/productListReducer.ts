import * as actions from '../actions/productListTypes';

import {Product} from '../entities/ProductList';

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
  action: actions.ListProducts,
): ProductsListState {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        products: action.data.productList,
        isLoading: false,
        error: null,
      };
    case actions.GET_PRODUCTS_FAILURE:
      return {
        products: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

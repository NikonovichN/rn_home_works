import {searchProductsTypes} from '@actions';
import {Product} from '@entities';

export interface SearchProductsState {
  loading: boolean;
  products: Product[] | null;
  error: string | Error | null;
}

const initialState: SearchProductsState = {
  loading: false,
  products: null,
  error: null,
};

export default function searchProductsReducer(
  state: SearchProductsState = initialState,
  action: searchProductsTypes.ListProducts,
): SearchProductsState {
  switch (action.type) {
    case searchProductsTypes.SEARCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case searchProductsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        products: action.data.productList,
        loading: false,
        error: null,
      };
    case searchProductsTypes.SEARCH_PRODUCTS_FAILURE:
      return {
        products: null,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

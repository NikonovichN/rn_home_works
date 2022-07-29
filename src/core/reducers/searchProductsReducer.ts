import {searchProductsTypes} from '@actions';
import {Product} from '@entities';
import {filter} from 'lodash';

export interface SearchProductsState {
  loading: boolean;
  products: Product[] | null;
  filters: string[];
  error: string | Error | null;
}

const initialState: SearchProductsState = {
  loading: false,
  products: null,
  filters: [],
  error: null,
};

export default function searchProductsReducer(
  state: SearchProductsState = initialState,
  action: searchProductsTypes.SearchListProducts,
): SearchProductsState {
  switch (action.type) {
    case searchProductsTypes.SEARCH_PRODUCTS:
      const filters = state.filters;
      filters.unshift(action.filter);

      return {
        ...state,
        filters: filters.length > 20 ? filters.splice(-1) : filters,
        loading: true,
      };
    case searchProductsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data.productList,
        loading: false,
        error: null,
      };
    case searchProductsTypes.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: null,
        loading: false,
        error: action.error,
      };
    case searchProductsTypes.SEARCH_PRODUCTS_READ_STORAGE_SUCCESS:
      return {
        ...state,
        products: action.products,
        filters: action.filters,
        loading: false,
      };
    default:
      return state;
  }
}

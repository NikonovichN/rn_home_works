import * as actions from './searchProductListTypes';
import {ProductList} from '@entities';

export function searchProducts(filter: string): actions.SearchProducts {
  return {
    type: actions.SEARCH_PRODUCTS,
    filter,
  };
}

export function searchProductsRequest(): actions.SearchProductsRequest {
  return {type: actions.SEARCH_PRODUCTS_REQUEST};
}

export function searchProductsSuccess(
  products: ProductList,
): actions.SearchProductsSuccess {
  return {
    type: actions.SEARCH_PRODUCTS_SUCCESS,
    data: products,
  };
}

export function searchProductsFailure(
  error: Error | string,
): actions.SearchProductsFailure {
  return {
    type: actions.SEARCH_PRODUCTS_FAILURE,
    error,
  };
}

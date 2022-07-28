import {ProductList} from '@entities';

export const SEARCH_PRODUCTS = 'search_product_list/SEARCH_PRODUCTS';
export interface SearchProducts {
  type: typeof SEARCH_PRODUCTS;
  filter: string;
}

export const SEARCH_PRODUCTS_REQUEST =
  'search_product_list/SEARCH_PRODUCTS_REQUEST';
export interface SearchProductsRequest {
  type: typeof SEARCH_PRODUCTS_REQUEST;
}

export const SEARCH_PRODUCTS_SUCCESS =
  'search_product_list/SEARCH_PRODUCTS_SUCCESS';
export interface SearchProductsSuccess {
  type: typeof SEARCH_PRODUCTS_SUCCESS;
  data: ProductList;
}

export const SEARCH_PRODUCTS_FAILURE =
  'search_product_list/SEARCH_PRODUCTS_FAILURE';
export interface SearchProductsFailure {
  type: typeof SEARCH_PRODUCTS_FAILURE;
  error: Error | string;
}

export type ListProducts =
  | SearchProducts
  | SearchProductsRequest
  | SearchProductsSuccess
  | SearchProductsFailure;

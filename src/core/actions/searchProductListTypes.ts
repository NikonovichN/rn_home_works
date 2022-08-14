import {Product, ProductList} from '@entities';

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

export const SEARCH_PRODUCTS_READ_STORAGE =
  'search_product_list/SEARCH_PRODUCTS_READ_STORAGE';
export interface SearchProductsReadStorage {
  type: typeof SEARCH_PRODUCTS_READ_STORAGE;
}

export const SEARCH_PRODUCTS_READ_STORAGE_SUCCESS =
  'search_product_list/SEARCH_PRODUCTS_READ_STORAGE_SUCCESS';
export interface SearchProductsReadStorageSuccess {
  type: typeof SEARCH_PRODUCTS_READ_STORAGE_SUCCESS;
  products: Product[] | null;
  filters: string[];
}

export const SEARCH_PRODUCTS_SAVE_STORAGE =
  'search_product_list/SEARCH_PRODUCTS_SAVE_STORAGE';
export interface SearchProductsSaveStorage {
  type: typeof SEARCH_PRODUCTS_SAVE_STORAGE;
}

export type SearchListProducts =
  | SearchProducts
  | SearchProductsRequest
  | SearchProductsSuccess
  | SearchProductsFailure
  | SearchProductsReadStorage
  | SearchProductsReadStorageSuccess
  | SearchProductsSaveStorage;

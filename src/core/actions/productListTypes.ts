import {ProductList} from '../entities/ProductList';

export const GET_PRODUCTS = 'product_list/GET_PRODUCTS';
export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
}

export const GET_PRODUCTS_REQUEST = 'product_list/GET_PRODUCTS_REQUEST';
export interface GetProductsRequestAction {
  type: typeof GET_PRODUCTS_REQUEST;
}

export const GET_PRODUCTS_SUCCESS = 'product_list/GET_PRODUCTS_SUCCESS';
export interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  productList: ProductList;
}

export const GET_PRODUCTS_FAILURE = 'product_list/GET_PRODUCTS_FAILURE';
export interface GetProductsFailureAction {
  type: typeof GET_PRODUCTS_FAILURE;
  error: Error | string;
}

export type ListProducts =
  | GetProductsAction
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;

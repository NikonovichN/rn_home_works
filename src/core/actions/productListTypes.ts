import {ProductList} from '../entities/ProductList';

const PRODUCT_LIST: string = 'product_list';

export const GET_PRODUCTS = `${PRODUCT_LIST}/GET_PRODUCTS`;
export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
}

export const GET_PRODUCTS_REQUEST = `${PRODUCT_LIST}/GET_PRODUCTS_REQUEST`;
export interface GetProductsRequestAction {
  type: typeof GET_PRODUCTS_REQUEST;
}

export const GET_PRODUCTS_SUCCESS = `${PRODUCT_LIST}/GET_PRODUCTS_SUCCESS`;
export interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  data: ProductList;
}

export const GET_PRODUCTS_FAILURE = `${PRODUCT_LIST}/GET_PRODUCTS_FAILURE`;
export interface GetProductsFailureAction {
  type: typeof GET_PRODUCTS_FAILURE;
  error: Error | string;
}

export type ListProducts =
  | GetProductsAction
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;

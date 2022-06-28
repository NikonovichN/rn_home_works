import {Product} from '../entities/ProductList';

export const GET_PRODUCT = 'product_details/GET_PRODUCT';
export interface GetProductAction {
  type: typeof GET_PRODUCT;
  productId: string;
}

export const GET_PRODUCT_REQUEST = 'product_details/GET_PRODUCT_REQUEST';
export interface GetProductRequestAction {
  type: typeof GET_PRODUCT_REQUEST;
}

export const GET_PRODUCT_SUCCESS = 'product_details/GET_PRODUCT_SUCCESS';
export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS;
  product: Product;
}

export const GET_PRODUCT_FAILURE = 'product_details/GET_PRODUCT_FAILURE';
export interface GetProductFailureAction {
  type: typeof GET_PRODUCT_FAILURE;
  error: Error | string;
}

export type ProductDetails =
  | GetProductAction
  | GetProductRequestAction
  | GetProductSuccessAction
  | GetProductFailureAction;

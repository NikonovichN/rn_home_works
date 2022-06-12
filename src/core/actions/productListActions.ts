import * as actions from './productListTypes';
import {ProductList} from '../entities/ProductList';

export function getProducts(): actions.GetProductsAction {
  return {
    type: actions.GET_PRODUCTS,
  };
}

export function getProductsRequest(): actions.GetProductsRequestAction {
  return {
    type: actions.GET_PRODUCTS_REQUEST,
  };
}

export function getProductsSuccess(
  products: ProductList,
): actions.GetProductsSuccessAction {
  return {
    type: actions.GET_PRODUCTS_SUCCESS,
    data: products,
  };
}

export function getProductsFailure(
  error: Error | string,
): actions.GetProductsFailureAction {
  return {
    type: actions.GET_PRODUCTS_FAILURE,
    error: error,
  };
}

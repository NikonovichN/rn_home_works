import {Product} from '../entities/ProductList';
import * as actions from './productDetailsTypes';

export function getProductDetails(productId: string): actions.GetProductAction {
  return {type: actions.GET_PRODUCT, productId};
}

export function getProductDetailsRequest(): actions.GetProductRequestAction {
  return {type: actions.GET_PRODUCT_REQUEST};
}

export function getProductDetailsSuccess(
  product: Product,
): actions.GetProductSuccessAction {
  return {type: actions.GET_PRODUCT_SUCCESS, product};
}

export function getProductDetailsFailure(error: Error | string) {
  return {type: actions.GET_PRODUCT_FAILURE, error};
}

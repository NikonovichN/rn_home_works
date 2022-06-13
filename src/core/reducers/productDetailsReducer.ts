import * as actions from '../actions/productDetailsTypes';
import {emptyProduct} from '../convertor/Convertor';
import {Product} from '../entities/ProductList';

export interface ProductDetailsState {
  productDetails: Product;
  isLoading: Boolean;
  error: Error | string | null;
}

const initialState: ProductDetailsState = {
  productDetails: emptyProduct,
  isLoading: true,
  error: null,
};

export default function productDetailsReducer(
  state: ProductDetailsState = initialState,
  action: actions.ProductDetails,
): ProductDetailsState {
  switch (action.type) {
    case actions.GET_PRODUCT: {
      return state;
    }
    case actions.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        productDetails: action.product,
        isLoading: false,
      };
    }
    case actions.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

import {productDetailsTypes} from '../actions';
import {emptyProduct} from '../converters';
import {Product} from '../entities';

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
  action: productDetailsTypes.ProductDetails,
): ProductDetailsState {
  switch (action.type) {
    case productDetailsTypes.GET_PRODUCT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case productDetailsTypes.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        productDetails: action.product,
        isLoading: false,
      };
    }
    case productDetailsTypes.GET_PRODUCT_FAILURE: {
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

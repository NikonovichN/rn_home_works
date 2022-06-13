import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import ProductDetails from './ProductDetails';

import {ProductDetails as ProductDetailsTypes} from '../../core/actions/productDetailsTypes';
import {getProductDetails} from '../../core/actions/productDetailsActions';
import {AppState} from '../../core/reducers/rootReducer';

interface ProductDetailsProps {
  productId: string;
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productList.isLoading,
  error: state.productList.error,
  products: state.productList.products,
});

function mapDispatchToProps(
  dispatch: Dispatch<ProductDetailsTypes>,
  props: ProductDetailsProps,
) {
  const getProduct = () => dispatch(getProductDetails(props.productId));

  getProduct();

  return {onRefresh: getProduct};
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetails);

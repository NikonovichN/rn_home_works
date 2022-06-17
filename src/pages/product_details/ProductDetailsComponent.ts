import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {RouteProp} from '@react-navigation/native';

import {ProductDetails as ProductDetailsTypes} from '../../core/actions/productDetailsTypes';
import {getProductDetails} from '../../core/actions/productDetailsActions';
import {AppState} from '../../core/reducers/rootReducer';

import ProductDetails from './ProductDetails';
import {RootStackParamList} from '../../../App';

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productDetails.isLoading,
  error: state.productDetails.error,
  product: state.productDetails.productDetails,
});

function mapDispatchToProps(
  dispatch: Dispatch<ProductDetailsTypes>,
  props: {route: RouteProp<RootStackParamList, 'ProductDetails'>},
) {
  const getProduct = () =>
    dispatch(getProductDetails(props.route.params.productId));

  getProduct();

  return {onRefresh: getProduct};
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetails);

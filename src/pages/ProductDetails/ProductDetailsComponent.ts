import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {RouteProp} from '@react-navigation/native';

import {ProductDetails as ProductDetailsTypes} from '../../core/actions/productDetailsTypes';
import {getProductDetails} from '../../core/actions/productDetailsActions';
import {addToCart as addToCartAction} from '../../core/actions/cart/addToCartActions';
import {AppState} from '../../core/reducers/rootReducer';

import ProductDetails from './ProductDetails';
import {RootStackParamList} from '../../pages/NavigationStack/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {AddToCartTypes} from '../../core/actions/cart/addToCartTypes';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

const mapStateToProps = (state: AppState, props: Props) => ({
  isLoading: state.productDetails.isLoading,
  error: state.productDetails.error,
  product: state.productDetails.productDetails,
  navigation: props.navigation,
});

function mapDispatchToProps(
  dispatch: Dispatch<ProductDetailsTypes | AddToCartTypes>,
  props: Props,
) {
  const getProduct = () =>
    dispatch(getProductDetails(props.route.params.productId));
  const addToCart = (variantId: string) =>
    dispatch(addToCartAction(variantId, props.navigation));

  getProduct();

  return {onRefresh: getProduct, addToCart};
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetails);

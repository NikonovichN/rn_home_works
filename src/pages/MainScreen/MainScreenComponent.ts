import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainScreen} from './MainScreen';

import {ListProducts} from '../../core/actions/productListTypes';
import {getProducts} from '../../core/actions/productListActions';
import {AppState} from '../../core/reducers/rootReducer';

const mapStateToProps = (
  state: AppState,
  props: NativeStackScreenProps<any, any>,
) => ({
  isLoading: state.productList.isLoading,
  error: state.productList.error,
  products: state.productList.products,
  navigation: props.navigation,
});

const mapDispatchToProps = (dispatch: Dispatch<ListProducts>) => ({
  onRefresh: () => dispatch(getProducts()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const MainScreenComponent = connector(MainScreen);

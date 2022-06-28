import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import MainScreen from './MainScreen';

import {ListProducts} from '../../core/actions/productListTypes';
import {getProducts} from '../../core/actions/productListActions';
import {AppState} from '../../core/reducers/rootReducer';

const mapStateToProps = (state: AppState) => ({
  isLoading: state.productList.isLoading,
  error: state.productList.error,
  products: state.productList.products,
});

const mapDispatchToProps = (dispatch: Dispatch<ListProducts>) => ({
  onRefresh: () => dispatch(getProducts()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MainScreen);

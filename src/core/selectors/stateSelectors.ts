import {ProductDetailsState} from '../reducers/productDetailsReducer';
import {ProductsListState} from '../reducers/productListReducer';
import {AppState} from '../reducers/rootReducer';
import {UserState} from '../reducers/userReducer';

const isLoggedSelector = (state: AppState): boolean => state.profile.isLogged;

const userSelector = (state: AppState): UserState => state.profile;

const productDetailsSelector = (state: AppState): ProductDetailsState =>
  state.productDetails;

const productListSelector = (state: AppState): ProductsListState =>
  state.productList;

export {
  isLoggedSelector,
  productDetailsSelector,
  productListSelector,
  userSelector,
};

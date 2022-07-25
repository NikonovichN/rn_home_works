import {CartState} from '../reducers/cartReducer';
import {NetworkIssueState} from '../reducers/networkIssueReducer';
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

const cartSelector = (state: AppState): CartState => state.cart;

const networkIssueSelector = (state: AppState): NetworkIssueState =>
  state.networkIssue;

export {
  isLoggedSelector,
  productDetailsSelector,
  productListSelector,
  userSelector,
  cartSelector,
  networkIssueSelector,
};

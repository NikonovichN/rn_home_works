import {CartState} from '../reducers/cartReducer';
import {NetworkIssueState} from '../reducers/networkIssueReducer';
import {ProductDetailsState} from '../reducers/productDetailsReducer';
import {ProductsListState} from '../reducers/productListReducer';
import {ProfileState} from '../reducers/profileReducer';
import {AppState} from '../reducers/rootReducer';
import {SearchProductsState} from '../reducers/searchProductsReducer';
import {UserState} from '../reducers/userReducer';

const isLoggedSelector = (state: AppState): boolean => state.user.isLogged;

const userSelector = (state: AppState): UserState => state.user;

const productDetailsSelector = (state: AppState): ProductDetailsState =>
  state.productDetails;

const productListSelector = (state: AppState): ProductsListState =>
  state.productList;

const cartSelector = (state: AppState): CartState => state.cart;

const networkIssueSelector = (state: AppState): NetworkIssueState =>
  state.networkIssue;

const profileSelector = (state: AppState): ProfileState => state.profile;

const searchProductsSelector = (state: AppState): SearchProductsState =>
  state.searchProducts;

export {
  isLoggedSelector,
  productDetailsSelector,
  productListSelector,
  userSelector,
  cartSelector,
  networkIssueSelector,
  profileSelector,
  searchProductsSelector,
};

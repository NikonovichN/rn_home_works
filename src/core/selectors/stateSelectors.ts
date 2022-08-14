import {CartState} from '../reducers/cartReducer';
import {NetworkIssueState} from '../reducers/networkIssueReducer';
import {ProductDetailsState} from '../reducers/productDetailsReducer';
import {ProductsListState} from '../reducers/productListReducer';
import {ProfileState} from '../reducers/profileReducer';
import {AppState} from '../reducers/rootReducer';
import {SearchProductsState} from '../reducers/searchProductsReducer';
import {UserState} from '../reducers/userReducer';

export const isLoggedSelector = (state: AppState): boolean =>
  state.user.isLogged;

export const userSelector = (state: AppState): UserState => state.user;

export const productDetailsSelector = (state: AppState): ProductDetailsState =>
  state.productDetails;

export const productListSelector = (state: AppState): ProductsListState =>
  state.productList;

export const cartSelector = (state: AppState): CartState => state.cart;

export const networkIssueSelector = (state: AppState): NetworkIssueState =>
  state.networkIssue;

export const profileSelector = (state: AppState): ProfileState => state.profile;

export const searchProductsSelector = (state: AppState): SearchProductsState =>
  state.searchProducts;

import {ProductDetailsState} from '../reducers/productDetailsReducer';
import {AppState} from '../reducers/rootReducer';

const isLoggedSelector = (state: AppState): boolean => state.profile.isLogged;

const productDetailsSelector = (state: AppState): ProductDetailsState =>
  state.productDetails;

export {isLoggedSelector, productDetailsSelector};

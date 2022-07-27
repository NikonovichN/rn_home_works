import {combineReducers} from 'redux';

import productListReducer from './productListReducer';
import productDetailsReducer from './productDetailsReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import networkIssueReducer from './networkIssueReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  cart: cartReducer,
  networkIssue: networkIssueReducer,
  profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

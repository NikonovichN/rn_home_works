import {combineReducers} from 'redux';

import productListReducer from './productListReducer';
import productDetailsReducer from './productDetailsReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import networkIssueReducer from './networkIssueReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  profile: userReducer,
  cart: cartReducer,
  networkIssue: networkIssueReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

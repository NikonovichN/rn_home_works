import {combineReducers} from 'redux';

import productListReducer from './productListReducer';
import productDetailsReducer from './productDetailsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  profile: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

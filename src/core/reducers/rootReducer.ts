import {combineReducers} from 'redux';

import productListReducer from './productListReducer';
import productDetailsReducer from './productDetailsReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

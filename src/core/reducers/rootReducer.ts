import {combineReducers} from 'redux';

import productListReducer from './productListReducer';

const rootReducer = combineReducers({productList: productListReducer});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

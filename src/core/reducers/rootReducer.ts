import {combineReducers} from 'redux';

import phoneListReducer from './phoneListReducer';

const rootReducer = combineReducers({phoneList: phoneListReducer});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

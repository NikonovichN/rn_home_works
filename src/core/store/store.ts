import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const createDebugger = require('redux-flipper').default;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [createDebugger(), sagaMiddleware];

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;

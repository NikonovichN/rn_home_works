import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const shopStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: applyMiddleware => applyMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export default shopStore;

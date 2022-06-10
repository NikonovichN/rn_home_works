import React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import shopStore from './src/core/store/store';
import MainScreen from './src/pages/main_screen/MainScreen';

const store = shopStore();

const App: () => ReactElement = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
);

export default App;

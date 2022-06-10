import React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import shopStore from './src/core/store/store';
import MainScreenComponent from './src/pages/main_screen/MainScreenComponent';
import {SafeAreaView} from 'react-native';

const store = shopStore();

const App: () => ReactElement = () => (
  <Provider store={store}>
    <SafeAreaView>
      <MainScreenComponent />
    </SafeAreaView>
  </Provider>
);

export default App;

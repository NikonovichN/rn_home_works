import React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import shopStore from './src/core/store/store';
import MainScreenComponent from './src/pages/main_screen/MainScreenComponent';
import Colors from './src/core/styles/ColorTokens';

const store = shopStore();

const App: () => ReactElement = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
        <MainScreenComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  </Provider>
);

export default App;

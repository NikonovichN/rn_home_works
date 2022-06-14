import React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import shopStore from './src/core/store/store';
import Colors from './src/core/styles/ColorTokens';
import {MainScreenComponent, ProductDetailsComponent} from './src/pages/pages';

const store = shopStore();

const App: () => ReactElement = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
        <MainScreenComponent />
        {/* <ProductDetailsComponent productId="1" /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  </Provider>
);

export default App;

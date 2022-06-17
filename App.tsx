import * as React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import shopStore from './src/core/store/store';
import Colors from './src/core/styles/ColorTokens';
import {DrawerNavigator} from './src/pages/pages';

const store = shopStore();

const App: () => ReactElement = () => (
  <NavigationContainer>
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
          <DrawerNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  </NavigationContainer>
);

export default App;

import React from 'react';
import {Provider} from 'react-redux';
import type {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import shopStore from './src/core/store/store';
import Colors from './src/core/styles/ColorTokens';
import {MainScreenComponent, ProductDetailsComponent} from './src/pages/pages';
import {Header} from './src/components/components';

const store = shopStore();

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetails: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: () => ReactElement = () => (
  <NavigationContainer>
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
              name="MainScreen"
              component={MainScreenComponent}
              options={() => ({
                header: ({navigation}) => (
                  <Header
                    isMainPage
                    navigation={navigation}
                    title="Ecommerce Store"
                  />
                ),
              })}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsComponent}
              options={() => ({
                header: ({navigation}) => (
                  <Header navigation={navigation} title="Product Details" />
                ),
              })}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  </NavigationContainer>
);

export default App;

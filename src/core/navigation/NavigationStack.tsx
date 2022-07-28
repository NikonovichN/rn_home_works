import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Cart,
  DummyPage,
  LogInPage,
  MainScreen,
  ProductDetailsPage,
  SearchProducts,
} from '@pages';
import {MainHeader, ProductHeader, CartHeader} from '@components';
import {Routes} from '@constants';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const clearHeader = () => null;

export const MainStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName={Routes.MainScreen}>
    <Stack.Screen
      name={Routes.MainScreen}
      component={MainScreen}
      options={() => ({
        header: () => <MainHeader title="Ecommerce Store" />,
      })}
    />
    <Stack.Screen
      name={Routes.ProductDetails}
      component={ProductDetailsPage}
      options={() => ({
        header: () => <ProductHeader title="Product Details" />,
      })}
    />
    <Stack.Screen
      name={Routes.LogIn}
      component={LogInPage}
      options={() => ({header: clearHeader})}
    />
    <Stack.Screen
      name={Routes.Cart}
      component={Cart}
      options={() => ({
        header: () => <CartHeader title="My Cart" />,
      })}
    />
    <Stack.Screen
      name={Routes.Search}
      component={SearchProducts}
      options={() => ({
        header: () => <ProductHeader title="Search" />,
      })}
    />
  </Stack.Navigator>
);

export const DummyStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName={Routes.DummyPage}>
    <Stack.Screen
      name={Routes.DummyPage}
      component={DummyPage}
      options={() => ({
        header: () => <MainHeader title="Dummy Page Stack" />,
      })}
    />
  </Stack.Navigator>
);

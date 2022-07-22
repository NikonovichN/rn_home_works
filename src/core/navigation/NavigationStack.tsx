import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Cart,
  DummyPage,
  LogInPage,
  MainScreen,
  ProductDetailsPage,
} from '@pages';
import {MainHeader, ProductHeader, CartHeader} from '@components';
import {RootStackParamList} from './types';
import {Routes} from '@constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

const clearHeader = () => null;

const MainStackNavigator: React.FC = () => (
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
  </Stack.Navigator>
);

const DummyStackNavigatorOne: React.FC = () => (
  <Stack.Navigator initialRouteName={Routes.DummyPage}>
    <Stack.Screen
      name={Routes.DummyPage}
      component={DummyPage}
      options={() => ({
        header: () => <MainHeader title="Dummy Page Stack 1" />,
      })}
    />
  </Stack.Navigator>
);

const DummyStackNavigatorTwo: React.FC = () => (
  <Stack.Navigator initialRouteName={Routes.DummyPage}>
    <Stack.Screen
      name={Routes.DummyPage}
      component={DummyPage}
      options={() => ({
        header: () => <MainHeader title="Dummy Page Stack 2" />,
      })}
    />
  </Stack.Navigator>
);

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="MainStack"
      component={MainStackNavigator}
      options={() => ({header: clearHeader})}
    />
    <Drawer.Screen
      name="DummyStack1"
      component={DummyStackNavigatorOne}
      options={() => ({header: clearHeader})}
    />
    <Drawer.Screen
      name="DummyStack2"
      component={DummyStackNavigatorTwo}
      options={() => ({header: clearHeader})}
    />
  </Drawer.Navigator>
);

export {DrawerNavigator};

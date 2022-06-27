import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CartComponent,
  DummyPage,
  LoginComponent,
  MainScreenComponent,
  ProductDetailsComponent,
} from '../pages';
import {
  headerWrapper,
  ModalWindow,
  MainHeader,
  ProductHeader,
  CartHeader,
} from '@components';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

const clearHeader = () => null;

const MainStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="MainScreen">
    <Stack.Screen
      name="MainScreen"
      component={MainScreenComponent}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            Component: MainHeader,
            navigation,
            title: 'Ecommerce Store',
          }),
      })}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetailsComponent}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            Component: ProductHeader,
            navigation,
            title: 'Product Details',
          }),
      })}
    />
    <Stack.Screen
      name="LogIn"
      component={LoginComponent}
      options={() => ({header: clearHeader})}
    />
    <Stack.Screen
      name="Cart"
      component={CartComponent}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            Component: CartHeader,
            navigation,
            title: 'My Cart',
          }),
      })}
    />
    <Stack.Group
      screenOptions={{presentation: 'transparentModal', header: clearHeader}}>
      <Stack.Screen name="ModalWindow" component={ModalWindow} />
    </Stack.Group>
  </Stack.Navigator>
);

const DummyStackNavigatorOne: React.FC = () => (
  <Stack.Navigator initialRouteName="DummyPage">
    <Stack.Screen
      name="DummyPage"
      component={DummyPage}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            Component: MainHeader,
            navigation,
            title: 'Dummy Page Stack 2',
          }),
      })}
    />
  </Stack.Navigator>
);

const DummyStackNavigatorTwo: React.FC = () => (
  <Stack.Navigator initialRouteName="DummyPage">
    <Stack.Screen
      name="DummyPage"
      component={DummyPage}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            Component: MainHeader,
            navigation,
            title: 'Dummy Page Stack 2',
          }),
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

export default DrawerNavigator;

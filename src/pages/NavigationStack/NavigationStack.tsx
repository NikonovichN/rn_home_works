import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DummyPage,
  MainScreenComponent,
  ProductDetailsComponent,
} from '../pages';
import {headerWrapper, ModalWindow} from '../../components/components';
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
            navigation,
            title: 'Ecommerce Store',
            isMainPage: true,
          }),
      })}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetailsComponent}
      options={() => ({
        header: ({navigation}) =>
          headerWrapper({
            navigation,
            title: 'Product Details',
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
            navigation,
            title: 'Dummy Page Stack 2',
            isMainPage: true,
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
            navigation,
            title: 'Dummy Page Stack 2',
            isMainPage: true,
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

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  clearHeader,
  DummyStackNavigator,
  MainStackNavigator,
} from './NavigationStack';
import {CustomDrawerContent} from './components';
import {CartHeader} from '@components';
import {Cart} from '@pages';
import {Routes} from '@constants';
import {AccentCart, AccentHeart} from '@icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Group>
      <Drawer.Screen
        name={Routes.HomePage}
        component={MainStackNavigator}
        options={() => ({header: clearHeader})}
      />
      <Drawer.Screen
        name={Routes.Cart}
        component={Cart}
        options={() => ({
          header: () => <CartHeader title="My Cart" />,
          drawerIcon: AccentCart,
        })}
      />
    </Drawer.Group>
    <Drawer.Group>
      <Drawer.Screen
        name="Fire work"
        component={DummyStackNavigator}
        options={() => ({header: clearHeader, drawerIcon: AccentHeart})}
      />
    </Drawer.Group>
  </Drawer.Navigator>
);

export {DrawerNavigator};

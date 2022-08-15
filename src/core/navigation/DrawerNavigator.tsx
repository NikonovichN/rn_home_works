import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  clearHeader,
  DummyStackNavigator,
  MainStackNavigator,
} from './NavigationStack';
import {CustomDrawerContent} from './components';
import {Header} from '@components';
import {AnalyticsPage, Cart, MapScreen, ProfileScreen} from '@pages';
import {Routes} from '@constants';
import {AccentCart, AccentHeart, AccentOrders, AccentProfile} from '@icons';

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
        name={Routes.Profile}
        component={ProfileScreen}
        options={() => ({
          header: () => <Header.Main title="My Profile" />,
          drawerIcon: AccentProfile,
        })}
      />
      <Drawer.Screen
        name="Fire work"
        component={DummyStackNavigator}
        options={() => ({header: clearHeader, drawerIcon: AccentHeart})}
      />
      <Drawer.Screen
        name={Routes.Cart}
        component={Cart}
        options={() => ({
          header: () => <Header.Cart title="My Cart" />,
          drawerIcon: AccentCart,
        })}
      />
      <Drawer.Screen
        name={Routes.Orders}
        component={MapScreen}
        options={() => ({
          header: () => <Header.Page title="Map" />,
          drawerIcon: AccentOrders,
        })}
      />
      <Drawer.Screen
        name={Routes.AnalyticsPage}
        component={AnalyticsPage}
        options={() => ({
          header: () => <Header.Page title="AnalyticsPage" />,
        })}
      />
    </Drawer.Group>
  </Drawer.Navigator>
);

export {DrawerNavigator};

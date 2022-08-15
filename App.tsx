import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text} from 'react-native';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {createStore} from './src/core/store';

import {Colors} from '@styles';
import {DrawerNavigator} from '@navigation';
import {NetworkIssueModalWrapper} from '@components';
import {trackScreen} from '@analytics';

const store = createStore();

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<undefined | string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          await trackScreen({name: currentRouteName});
        }

        routeNameRef.current = currentRouteName;
      }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeAreaContainer}>
            <NetworkIssueModalWrapper>
              <DrawerNavigator />
            </NetworkIssueModalWrapper>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default App;

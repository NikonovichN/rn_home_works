import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {createStore} from './src/core/store';

import {Colors} from '@styles';
import {DrawerNavigator} from '@navigation';
import {NetworkIssueModalWrapper} from '@components';

const store = createStore();

const App: React.FC = () => (
  <NavigationContainer>
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

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default App;

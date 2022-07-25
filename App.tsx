import * as React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import createStore from './src/core/store/store';
import {Colors} from './src/core/styles';
import {DrawerNavigator} from './src/core/navigation';
import {NetworkIssueModalWrapper} from './src/components';

const store = createStore();

const App: React.FC = () => (
  <NavigationContainer>
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaContainer}>
          {/* <NetworkIssueModalWrapper> */}
          <DrawerNavigator />

          {/* </NetworkIssueModalWrapper> */}
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
